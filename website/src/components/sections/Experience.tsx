"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    type: "work",
    org: "Red Bull GmbH",
    role: "IT-Student (Teilzeit)",
    period: "Mai 2025 – Heute",
    location: "Salzburg",
    highlights: [
      "Entwicklung eines KI-Agenten zur automatisierten Klassifizierung von Innovationen",
      "Enterprise Architecture und IT-Innovationsanalyse",
      "Arbeit in internationaler Unternehmensinfrastruktur",
    ],
  },
  {
    type: "work",
    org: "Cloudunify",
    role: "Sales Consultant (Teilzeit)",
    period: "Mai 2026 – Heute",
    location: "Remote",
    highlights: [
      "ERP-Demos mit Odoo für Interessenten und Neukunden",
      "Angebotserstellung und Vertragsabschluss",
      "B2B-Vertrieb für Cloud- und ERP-Lösungen",
    ],
  },
  {
    type: "edu",
    org: "FH Salzburg",
    role: "Bachelor Wirtschaftsinformatik & Digitale Transformation",
    period: "September 2023 – Juli 2026",
    location: "Puch bei Hallein",
    highlights: [
      "Abschluss Bachelor of Science, Juli 2026",
      "Leistungsstipendium des Landes Salzburg",
      "Jahrgangssprecher 3 Jahre in Folge",
    ],
  },
  {
    type: "edu",
    org: "HTBLuVA Salzburg",
    role: "Elektronik und technische Informatik",
    period: "2017 – 2022",
    location: "Salzburg",
    highlights: [
      "Technische Ausbildung Elektronik & Informatik",
      "Programmierung, Netzwerktechnik, Embedded Systems",
      "Abschluss mit Matura",
    ],
  },
];

const item = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  return (
    <section className="section-pad border-t border-navy-800">
      <div className="container-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            Erfahrung & Ausbildung
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Theorie trifft Praxis
          </h2>
          <p className="text-slate-400 max-w-xl">
            Gleichzeitig in Enterprise-IT bei Red Bull und im Studium an der FH Salzburg —
            mit Einblick in reale Unternehmensprobleme seit dem ersten Tag.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
          className="space-y-4"
        >
          {experience.map((e) => {
            const Icon = e.type === "work" ? Briefcase : GraduationCap;
            return (
              <motion.div key={`${e.org}-${e.role}`} variants={item} className="card-dark p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <div>
                        <h3 className="font-display font-bold text-white">{e.org}</h3>
                        <p className="text-sm text-blue-400 font-medium">{e.role}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-xs text-slate-500 font-mono">{e.period}</p>
                        <p className="text-xs text-slate-600">{e.location}</p>
                      </div>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {e.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-slate-400">
                          <div className="w-1 h-1 rounded-full bg-blue-500/60 shrink-0 mt-2" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
