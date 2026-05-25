"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const credentials = [
  { label: "Red Bull", sub: "IT-Student" },
  { label: "FH Salzburg", sub: "Wirtschaftsinformatik" },
  { label: "Cloudunify", sub: "Sales Consultant" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center section-pad overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Subtle blue glow top-left */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-md relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-6 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Verfügbar für neue Projekte
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight mb-6 text-balance"
          >
            Websites.{" "}
            <span className="text-blue-500">KI.</span>{" "}
            Automatisierung.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl"
          >
            Nicolas Hauser — IT-Student bei Red Bull und Bachelor Wirtschaftsinformatik FH Salzburg.
            Ich entwickle moderne Websites, KI-Agenten und automatisierte Workflows
            für Unternehmen in Österreich und Deutschland.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mb-16"
          >
            <Button asChild size="lg">
              <Link href="/kontakt">
                Projekt besprechen
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/leistungen">Leistungen ansehen</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <span className="text-xs text-slate-600 uppercase tracking-widest font-semibold">
              Erfahrung bei
            </span>
            {credentials.map((c) => (
              <div key={c.label} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-navy-600" />
                <span className="text-sm text-slate-400">
                  <span className="text-slate-200 font-medium">{c.label}</span>
                  {" · "}
                  <span className="text-slate-500">{c.sub}</span>
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
