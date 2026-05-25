import Link from "next/link";
import { ExternalLink, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-navy-800 bg-navy-950">
      <div className="container-md py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <div className="font-display font-bold text-lg text-white mb-3">
              NH <span className="text-blue-500">Consulting</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Moderne Webentwicklung, KI-Integration und Automatisierung für
              Unternehmen in Österreich und Deutschland.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
              Kontakt
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin size={14} className="text-slate-500 shrink-0" />
                {siteConfig.location}
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <Mail size={14} className="text-slate-500 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <ExternalLink size={14} className="text-slate-500 shrink-0" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <ExternalLink size={14} className="text-slate-500 shrink-0" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Nicolas Hauser — NH Consulting. Einzelunternehmen, Salzburg.
          </p>
          <p className="text-xs text-slate-600">
            Kleinunternehmer gem. § 6 Abs. 1 Z 27 UStG
          </p>
        </div>
      </div>
    </footer>
  );
}
