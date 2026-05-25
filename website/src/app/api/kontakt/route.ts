import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
  website: z.string().max(0),
});

const rateMap = new Map<string, { count: number; reset: number }>();

function getRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + 60_000 });
    return true;
  }
  if (entry.count >= 3) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!getRateLimit(ip)) {
    return NextResponse.json({ error: "Zu viele Anfragen. Bitte warten Sie kurz." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Bitte alle Pflichtfelder ausfüllen." }, { status: 422 });
  }

  const { name, email, company, message } = result.data;

  if (process.env.RESEND_API_KEY) {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "NH Consulting <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "office@nh-consulting.at",
      subject: `Neue Kontaktanfrage von ${name}`,
      text: [
        `Name: ${name}`,
        `E-Mail: ${email}`,
        company ? `Unternehmen: ${company}` : "",
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });
  } else {
    console.log("[kontakt]", { name, email, company, message });
  }

  return NextResponse.json({ ok: true });
}
