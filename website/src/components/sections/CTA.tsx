"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="section-pad border-t border-navy-800">
      <div className="container-md">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-dark p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">
              Bereit loszulegen?
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 text-balance">
              Ihr Projekt in kompetenten Händen
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto mb-8">
              Kostenloses Erstgespräch, klares Angebot, keine versteckten Kosten.
              Ich beantworte Anfragen innerhalb von 24 Stunden.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg">
                <Link href="/kontakt">
                  Unverbindlich anfragen
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/leistungen">Preise ansehen</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
