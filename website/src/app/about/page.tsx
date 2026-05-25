import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Nicolas Hauser — IT-Student bei Red Bull, Bachelor Wirtschaftsinformatik FH Salzburg, Sales Consultant bei Cloudunify. NH Consulting, Salzburg.",
};

const techStack = [
  "Next.js / React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "PostgreSQL",
  "OpenAI API",
  "Claude API",
  "GitHub",
  "Vercel",
  "Odoo",
  "REST APIs",
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="section-pad">
        <div className="container-md">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
                Über mich
              </p>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
                Nicolas Hauser
              </h1>

              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Ich bin IT-Student (Teilzeit) bei <span className="text-slate-200">Red Bull</span> in
                  Salzburg, wo ich einen KI-Agenten zur automatisierten Klassifizierung von Innovationen
                  entwickle und im Bereich Enterprise Architecture arbeite. Gleichzeitig studiere ich
                  im letzten Jahr{" "}
                  <span className="text-slate-200">Wirtschaftsinformatik & Digitale Transformation</span>{" "}
                  an der FH Salzburg (Abschluss Juli 2026).
                </p>
                <p>
                  Parallel bin ich als Sales Consultant bei{" "}
                  <span className="text-slate-200">Cloudunify</span> tätig, wo ich ERP-Lösungen auf
                  Basis von Odoo an Unternehmen vermarkte — von der Demo bis zum Vertragsabschluss.
                </p>
                <p>
                  Mit NH Consulting helfe ich Unternehmen, die digital wachsen wollen. Ich bringe
                  technisches Know-how aus echten Enterprise-Projekten mit und weiß, was in der
                  Praxis funktioniert — nicht nur auf dem Papier.
                </p>
                <p>
                  Mein Ansatz: keine unnötige Komplexität, klare Kommunikation, saubere Technik.
                  Ich bin Einzelunternehmer in Salzburg und arbeite remote mit Unternehmen in
                  Österreich und Deutschland.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/kontakt">
                    Projekt besprechen
                    <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                    <ExternalLink size={14} />
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="card-dark p-6">
                <h3 className="font-display font-bold text-white mb-4 text-sm uppercase tracking-widest text-slate-500">
                  Fakten
                </h3>
                <dl className="space-y-3">
                  {[
                    ["Standort", "Salzburg, Österreich"],
                    ["Verfügbarkeit", "Neue Projekte: Ja"],
                    ["Sprachen", "Deutsch, Englisch"],
                    ["Arbeitsweise", "Remote & vor Ort"],
                    ["Abschluss", "Bachelor Juli 2026"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-4">
                      <dt className="text-xs text-slate-500 font-semibold uppercase tracking-wide shrink-0">
                        {label}
                      </dt>
                      <dd className="text-sm text-slate-300 text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="card-dark p-6">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-slate-400 bg-navy-800 border border-navy-700 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-dark p-6">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                  Auszeichnungen
                </h3>
                <ul className="space-y-3">
                  <li className="text-sm text-slate-300">
                    <span className="text-blue-400 font-medium">Leistungsstipendium</span>
                    <span className="text-slate-500 block text-xs mt-0.5">Land Salzburg · FH Salzburg</span>
                  </li>
                  <li className="text-sm text-slate-300">
                    <span className="text-blue-400 font-medium">Jahrgangssprecher</span>
                    <span className="text-slate-500 block text-xs mt-0.5">3 Jahre in Folge · FH Salzburg</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
