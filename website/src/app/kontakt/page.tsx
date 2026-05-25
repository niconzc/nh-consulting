import type { Metadata } from "next";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Projekt anfragen oder Erstgespräch vereinbaren — Nicolas Hauser, NH Consulting Salzburg. Antwort innerhalb von 24 Stunden.",
};

export default function KontaktPage() {
  return (
    <main className="pt-20">
      <section className="section-pad">
        <div className="container-md">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
                Kontakt
              </p>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
                Projekt anfragen
              </h1>
              <p className="text-slate-400 leading-relaxed mb-8">
                Beschreiben Sie kurz Ihr Vorhaben — ich melde mich innerhalb von 24 Stunden
                mit einem unverbindlichen Erstgespräch zurück.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center group-hover:border-blue-500/40 transition-colors">
                    <Mail size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-0.5">E-Mail</p>
                    <p className="text-sm text-slate-300">{siteConfig.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-slate-400">
                  <div className="w-10 h-10 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center">
                    <MapPin size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-0.5">Standort</p>
                    <p className="text-sm text-slate-300">{siteConfig.location}</p>
                  </div>
                </div>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center group-hover:border-blue-500/40 transition-colors">
                    <ExternalLink size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-0.5">LinkedIn</p>
                    <p className="text-sm text-slate-300">Nicolas Hauser</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 p-4 bg-navy-900 border border-navy-700 rounded-xl">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
                  Antwortzeit
                </p>
                <p className="text-sm text-slate-400">
                  Ich antworte auf alle Anfragen innerhalb von{" "}
                  <span className="text-slate-200 font-medium">24 Stunden</span> an Werktagen.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
