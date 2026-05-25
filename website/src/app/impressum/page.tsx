import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <main className="pt-20">
      <section className="section-pad">
        <div className="container-md max-w-2xl">
          <h1 className="text-3xl font-display font-bold text-white mb-8">Impressum</h1>

          <div className="space-y-8 text-sm text-slate-400 leading-relaxed">
            <div>
              <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                Angaben gem. § 5 ECG
              </h2>
              <div className="space-y-1">
                <p className="text-slate-200 font-medium">Nicolas Hauser</p>
                <p>NH Consulting (Einzelunternehmen)</p>
                <p>Salzburg, Österreich</p>
                <p>
                  E-Mail:{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-blue-400 hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                Unternehmensgegenstand
              </h2>
              <p>
                Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik
                (Freies Gewerbe gem. § 5 Z 1 GewO 1994)
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                Mitgliedschaft
              </h2>
              <p>Wirtschaftskammer Österreich (WKO) — Fachgruppe UBIT</p>
              <p className="mt-1">
                Berufsrecht:{" "}
                <a
                  href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10007517"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Gewerbeordnung 1994 (GewO)
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                Umsatzsteuer
              </h2>
              <p>
                Kleinunternehmer gem. § 6 Abs. 1 Z 27 UStG — Umsatzsteuer wird nicht ausgewiesen.
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                Aufsichtsbehörde
              </h2>
              <p>Magistrat der Stadt Salzburg</p>
            </div>

            <div>
              <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                Haftungshinweis
              </h2>
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die
                Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich
                deren Betreiber verantwortlich.
              </p>
            </div>

            <div className="pt-4 border-t border-navy-800">
              <p className="text-xs text-slate-600">Stand: Juni 2026</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
