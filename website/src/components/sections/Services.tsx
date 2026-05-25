"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Brain, Zap, MessageSquare, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Webentwicklung",
    subtitle: "Ab €899",
    description:
      "Moderne, schnelle Websites und Web-Apps mit Next.js. Responsive Design, optimiert für Suchmaschinen und Conversions.",
    features: ["Landingpages & Business-Websites", "Web-Apps & Dashboards", "Performance & SEO"],
  },
  {
    icon: Brain,
    title: "KI-Integration",
    subtitle: "Auf Anfrage",
    description:
      "KI-Agenten und intelligente Systeme, die manuelle Aufgaben automatisieren — von Klassifizierung bis zur Content-Generierung.",
    features: ["KI-Agenten & Chatbots", "Datenanalyse & Klassifizierung", "OpenAI / Claude API"],
  },
  {
    icon: Zap,
    title: "Automatisierung",
    subtitle: "Auf Anfrage",
    description:
      "Automatisierte Workflows und System-Integrationen, die Ihnen Zeit sparen und manuelle Fehler eliminieren.",
    features: ["Workflow-Automatisierung", "API-Integrationen", "Reporting & Benachrichtigungen"],
  },
  {
    icon: MessageSquare,
    title: "IT-Beratung",
    subtitle: "Ab €75/h",
    description:
      "Technologieauswahl, digitale Strategie und Enterprise Architecture — pragmatisch und umsetzungsorientiert.",
    features: ["Technologieauswahl", "Enterprise Architecture", "Digitale Strategie"],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
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
            Leistungen
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Was ich für Sie entwickle
          </h2>
          <p className="text-slate-400 max-w-xl">
            Von der ersten Idee bis zum fertigen Produkt — technisch sauber, auf den Punkt und
            ohne unnötige Komplexität.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.title} variants={item} className="card-dark p-6 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-navy-800 px-2.5 py-1 rounded-md">
                    {s.subtitle}
                  </span>
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{s.description}</p>
                <ul className="space-y-1.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            Alle Leistungen und Preise
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
