import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Webentwicklung ab €899, KI-Integration, Automatisierung und IT-Beratung — transparente Preise, keine versteckten Kosten.",
};

const packages = [
  {
    name: "Starter",
    price: "Ab €899",
    description: "Professioneller Webauftritt für Einzelunternehmer und kleine Betriebe.",
    features: [
      "Bis zu 5 Seiten",
      "Responsive Design",
      "Kontaktformular",
      "Grundlegendes SEO",
      "Next.js / React",
      "Lieferzeit: 2–3 Wochen",
    ],
    cta: "Starter anfragen",
    highlighted: false,
  },
  {
    name: "Business",
    price: "Ab €2.999",
    description: "Vollständige Business-Website mit erweiterten Funktionen und eigenem CMS.",
    features: [
      "Bis zu 15 Seiten",
      "CMS-Integration (z.B. Sanity)",
      "Blog / Newsbereich",
      "Analytics-Integration",
      "Performance-Optimierung",
      "Lieferzeit: 3–5 Wochen",
    ],
    cta: "Business anfragen",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "Ab €4.999",
    description: "Individuelle Web-App, komplexe Integrationen oder maßgeschneiderte Lösungen.",
    features: [
      "Unbegrenzte Seiten",
      "Individuelle Features",
      "API-Integrationen",
      "KI-Komponenten optional",
      "Priorisierter Support",
      "Lieferzeit: nach Absprache",
    ],
    cta: "Premium anfragen",
    highlighted: false,
  },
];

const additionalServices = [
  {
    name: "KI-Integration",
    price: "Auf Anfrage",
    items: [
      "KI-Agenten (OpenAI / Claude)",
      "Automatische Klassifizierung & Analyse",
      "Chatbot-Integration",
      "Individuelle KI-Workflows",
    ],
  },
  {
    name: "Automatisierung",
    price: "Auf Anfrage",
    items: [
      "Workflow-Automatisierung",
      "API-zu-API-Integrationen",
      "Automatische Reports",
      "E-Mail- & Benachrichtigungs-Flows",
    ],
  },
  {
    name: "IT-Beratung",
    price: "Ab €75/h",
    items: [
      "Technologieauswahl",
      "Enterprise Architecture Review",
      "Digitale Strategie",
      "Code-Review & Audits",
    ],
  },
  {
    name: "Wartung & Support",
    price: "Ab €79/Monat",
    items: [
      "Regelmäßige Updates",
      "Sicherheits-Patches",
      "Performance-Monitoring",
      "E-Mail-Support",
    ],
  },
];

export default function LeistungenPage() {
  return (
    <main className="pt-20">
      <section className="section-pad">
        <div className="container-md">
          <div className="mb-12">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
              Leistungen & Preise
            </p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Transparente Preise
            </h1>
            <p className="text-slate-400 max-w-xl">
              Festpreise für klare Projekte — individuelle Anpassungen werden nach Aufwand zu €75/h
              berechnet. Das finale Angebot erhalten Sie nach einem kostenlosen Erstgespräch.
            </p>
          </div>

          {/* Website packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`card-dark p-6 flex flex-col ${
                  pkg.highlighted ? "ring-2 ring-blue-500/50" : ""
                }`}
              >
                {pkg.highlighted && (
                  <div className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
                    Empfohlen
                  </div>
                )}
                <div className="mb-4">
                  <h2 className="text-lg font-display font-bold text-white">{pkg.name}</h2>
                  <div className="text-2xl font-display font-bold text-blue-400 mt-1">
                    {pkg.price}
                  </div>
                </div>
                <p className="text-sm text-slate-400 mb-5 leading-relaxed">{pkg.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <Check size={14} className="text-blue-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={pkg.highlighted ? "primary" : "outline"}
                  className="w-full"
                >
                  <Link href="/kontakt">{pkg.cta}</Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Additional services */}
          <h2 className="text-2xl font-display font-bold text-white mb-6">Weitere Leistungen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {additionalServices.map((s) => (
              <div key={s.name} className="card-dark p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-white">{s.name}</h3>
                  <span className="text-xs text-slate-500 bg-navy-800 px-2.5 py-1 rounded-md font-semibold">
                    {s.price}
                  </span>
                </div>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                      <div className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="card-dark p-6 md:p-8 text-center">
            <h3 className="text-xl font-display font-bold text-white mb-2">
              Nicht sicher, was Sie brauchen?
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Kostenloses 30-minütiges Erstgespräch — ich höre zu und erkläre, was für Ihr Ziel sinnvoll ist.
            </p>
            <Button asChild>
              <Link href="/kontakt">
                Kostenloses Erstgespräch
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
