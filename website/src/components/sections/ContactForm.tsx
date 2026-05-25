"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

const schema = z.object({
  name: z.string().min(2, "Bitte Namen eingeben"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  company: z.string().optional(),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen haben"),
  website: z.string().max(0, ""),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setServerError("");
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setServerError(body.error || "Fehler beim Senden. Bitte versuchen Sie es später erneut.");
        return;
      }
      setSuccess(true);
      reset();
    } catch {
      setServerError("Verbindungsfehler. Bitte prüfen Sie Ihre Internetverbindung.");
    }
  }

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-dark p-8 text-center"
      >
        <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={28} className="text-blue-400" />
        </div>
        <h3 className="font-display font-bold text-xl text-white mb-2">Nachricht erhalten!</h3>
        <p className="text-slate-400 text-sm">
          Ich melde mich innerhalb von 24 Stunden bei Ihnen.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-6 text-xs text-slate-500 hover:text-slate-300 transition-colors"
        >
          Weitere Anfrage senden
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-dark p-6 md:p-8 space-y-5" noValidate>
      {/* Honeypot */}
      <input type="text" {...register("website")} className="hidden" tabIndex={-1} aria-hidden />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5">
            Name <span className="text-blue-500">*</span>
          </label>
          <Input {...register("name")} placeholder="Max Mustermann" />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5">
            E-Mail <span className="text-blue-500">*</span>
          </label>
          <Input {...register("email")} type="email" placeholder="max@unternehmen.at" />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-400 mb-1.5">
          Unternehmen <span className="text-slate-600">(optional)</span>
        </label>
        <Input {...register("company")} placeholder="Muster GmbH" />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-400 mb-1.5">
          Nachricht <span className="text-blue-500">*</span>
        </label>
        <Textarea
          {...register("message")}
          rows={5}
          placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihre Anfrage..."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      {serverError && (
        <p className="text-xs text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
          {serverError}
        </p>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full" size="md">
        {isSubmitting ? "Wird gesendet…" : (
          <>
            Nachricht senden
            <Send size={16} />
          </>
        )}
      </Button>

      <p className="text-xs text-slate-600 text-center">
        Ich antworte innerhalb von 24 Stunden · Kein Spam, keine Weitergabe
      </p>
    </form>
  );
}
