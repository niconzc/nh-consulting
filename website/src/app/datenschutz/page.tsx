import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <main className="pt-20">
      <section className="section-pad">
        <div className="container-md max-w-2xl">
          <h1 className="text-3xl font-display font-bold text-white mb-8">Datenschutzerklärung</h1>

          <div className="space-y-8 text-sm text-slate-400 leading-relaxed">
            <div>
              <h2 className="text-base font-display font-bold text-white mb-3">1. Verantwortlicher</h2>
              <p>
                Nicolas Hauser, NH Consulting, Salzburg, Österreich —{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-blue-400 hover:underline">
                  {siteConfig.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-base font-display font-bold text-white mb-3">
                2. Erhobene Daten und Zweck
              </h2>
              <p className="mb-3">
                Wir verarbeiten nur jene personenbezogenen Daten, die für den Betrieb dieser
                Website notwendig sind:
              </p>
              <ul className="space-y-2 ml-4">
                <li>
                  <span className="text-slate-200 font-medium">Kontaktformular:</span> Name,
                  E-Mail-Adresse, optional Unternehmen und Nachricht — zum Zweck der Bearbeitung
                  Ihrer Anfrage. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
                  Maßnahmen).
                </li>
                <li>
                  <span className="text-slate-200 font-medium">Server-Logs:</span> IP-Adresse,
                  Browsertyp, Zugriffszeit — für Sicherheit und Fehleranalyse. Automatische
                  Löschung nach 7 Tagen. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
                </li>
                <li>
                  <span className="text-slate-200 font-medium">Analytics:</span> Diese Website
                  verwendet Vercel Analytics (datenschutzfreundlich, kein Tracking über
                  Websitegrenzen hinweg, keine Cookies). Rechtsgrundlage: Art. 6 Abs. 1 lit. f
                  DSGVO.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-display font-bold text-white mb-3">3. Cookies</h2>
              <p>
                Diese Website verwendet keine Tracking-Cookies. Vercel Analytics arbeitet
                cookielos auf Basis anonymisierter Daten.
              </p>
            </div>

            <div>
              <h2 className="text-base font-display font-bold text-white mb-3">
                4. Weitergabe an Dritte
              </h2>
              <p>
                Daten werden nicht an Dritte verkauft oder für Werbezwecke weitergegeben.
                Für den E-Mail-Versand von Kontaktanfragen setzen wir ggf. Resend (USA) ein.
                Die Datenübertragung erfolgt auf Basis geeigneter Garantien (EU-Standardvertragsklauseln).
              </p>
            </div>

            <div>
              <h2 className="text-base font-display font-bold text-white mb-3">5. Speicherdauer</h2>
              <p>
                Kontaktanfragen werden nach Abschluss der Bearbeitung und Ablauf gesetzlicher
                Aufbewahrungspflichten (7 Jahre gem. BAO) gelöscht.
              </p>
            </div>

            <div>
              <h2 className="text-base font-display font-bold text-white mb-3">
                6. Ihre Rechte (DSGVO)
              </h2>
              <p className="mb-2">Sie haben das Recht auf:</p>
              <ul className="space-y-1 ml-4 list-disc list-inside">
                {[
                  "Auskunft (Art. 15 DSGVO)",
                  "Berichtigung (Art. 16 DSGVO)",
                  "Löschung (Art. 17 DSGVO)",
                  "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                  "Datenübertragbarkeit (Art. 20 DSGVO)",
                  "Widerspruch (Art. 21 DSGVO)",
                ].map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <p className="mt-3">
                Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-blue-400 hover:underline">
                  {siteConfig.email}
                </a>
              </p>
              <p className="mt-2">
                Sie haben außerdem das Recht, Beschwerde bei der österreichischen
                Datenschutzbehörde (
                <a
                  href="https://www.dsb.gv.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  dsb.gv.at
                </a>
                ) einzulegen.
              </p>
            </div>

            <div>
              <h2 className="text-base font-display font-bold text-white mb-3">7. Hosting</h2>
              <p>
                Diese Website wird auf Vercel (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
                91789, USA) gehostet. Vercel ist als EU-US Data Privacy Framework zertifiziert.
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
