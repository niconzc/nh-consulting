# Tech Stack — NH Consulting

**Standard-Stack für Kundenprojekte**

---

## Website-Projekte (Standard)

| Layer | Technologie | Warum |
|---|---|---|
| **Framework** | Next.js 14+ (App Router) | Performance, SEO, TypeScript-first |
| **Sprache** | TypeScript | Typsicherheit, weniger Bugs, besser wartbar |
| **Styling** | Tailwind CSS | Schnell, konsistent, kein CSS-Chaos |
| **Animationen** | Framer Motion | Professionelle Animationen, einfache API |
| **UI-Primitives** | Radix UI / shadcn/ui | Zugänglich, anpassbar, kein Vendor-Lock-in |
| **Icons** | Lucide React | Konsistent, leichtgewichtig |
| **Fonts** | next/font (Google Fonts) | Automatisch optimiert, DSGVO-konform |

## Hosting & Infrastruktur

| Bereich | Tool | Tier |
|---|---|---|
| **Hosting** | Vercel | Hobby (Free) → Pro bei Bedarf |
| **Domain** | World4you / nic.at | Günstiger AT-Registrar |
| **DNS** | Cloudflare | Kostenlos, sicher, schnell |
| **CDN** | Cloudflare / Vercel Edge | Automatisch |
| **SSL** | Let's Encrypt (via Vercel) | Automatisch, kostenlos |
| **E-Mail** | Google Workspace | €6/Monat, professionell |

## Datenbank & Backend (für Web Apps)

| Bereich | Tool | Warum |
|---|---|---|
| **Datenbank** | Supabase (PostgreSQL) | Managed, Auth inklusive, Free Tier gut |
| **Auth** | Supabase Auth / NextAuth.js | Bewährt, DSGVO-konform |
| **API** | Next.js API Routes | Keine separate Backend-Infrastruktur nötig |
| **File Storage** | Supabase Storage / Cloudflare R2 | Günstig, S3-kompatibel |
| **E-Mail-Versand** | Resend | Developer-freundlich, günstig |

## CMS (für bearbeitbare Websites)

| Option | Wann | Kosten |
|---|---|---|
| **Sanity** | Content-heavy Sites, Blog | Free bis ~$15/Mo |
| **Contentful** | Enterprise-Kunden | Free Tier reicht oft |
| **Payload CMS** | Self-hosted, volle Kontrolle | Open Source |
| **Markdown + Git** | Entwickler-freundliche Kunden | Kostenlos |

## AI & Automatisierung

| Tool | Einsatz | API |
|---|---|---|
| **Claude API** (Anthropic) | Komplexe Aufgaben, Code, Analyse | claude.ai API |
| **OpenAI API** | ChatGPT-basierte Chatbots | openai.com |
| **n8n** | Workflow-Automatisierung, Self-hosted | Open Source |
| **Vercel AI SDK** | AI-Features in Next.js-Websites | npm Package |

## Development Tools

| Tool | Zweck |
|---|---|
| **VS Code** | Haupt-Editor |
| **GitHub** | Versionskontrolle, Code-Hosting |
| **Figma** | UI-Design, Mockups |
| **GitHub Actions** | CI/CD, automatische Deployments |
| **pnpm** | Package Manager (schneller als npm) |
| **ESLint + Prettier** | Code-Qualität & Formatierung |
| **TypeScript** | Typsicherheit |

---

## Coding Standards

### Dateistruktur (Next.js App Router)
```
src/
├── app/                    # Pages & Layouts
│   ├── (marketing)/       # Route Groups
│   ├── api/               # API Routes
│   └── layout.tsx
├── components/
│   ├── ui/                # Primitive Komponenten
│   ├── sections/          # Seiten-Sektionen
│   └── layout/            # Header, Footer etc.
├── lib/                   # Utilities, Helpers
├── config/                # Konfiguration
└── types/                 # TypeScript Types
```

### Git-Konventionen
```
feat: neue Funktion
fix: Bugfix
style: Design-Änderungen
refactor: Code-Umstrukturierung
docs: Dokumentation
chore: Konfiguration, Dependencies
```

### Branch-Strategie
```
main          → Produktions-Code (immer lauffähig)
dev           → Entwicklungs-Branch
feature/name  → Feature-Branches
fix/name      → Bugfix-Branches
```

### Commit-Nachrichten
```
feat(auth): add Google OAuth login
fix(contact): resolve form validation on mobile
style(header): update navigation mobile breakpoints
```

---

## Performance-Standards

Jede ausgelieferte Website muss folgende Lighthouse-Scores erreichen:

| Metrik | Mindest-Score |
|---|---|
| Performance | ≥ 90 |
| Accessibility | ≥ 90 |
| Best Practices | ≥ 90 |
| SEO | ≥ 90 |

**Core Web Vitals Ziele:**
- LCP (Largest Contentful Paint): < 2,5s
- FID / INP: < 100ms
- CLS: < 0,1

---

## DSGVO / Datenschutz-Checkliste (jede Website)

- [ ] Datenschutzerklärung vorhanden und aktuell
- [ ] Impressum vorhanden
- [ ] Cookie-Banner mit Opt-in (kein Opt-out!)
- [ ] Google Analytics nur nach Einwilligung laden
- [ ] Kontaktformular: Datenschutz-Hinweis beim Formular
- [ ] Fonts lokal gehostet oder DSGVO-konform eingebunden (next/font)
- [ ] Keine US-Server für personenbezogene Daten (oder SCCs)
- [ ] Auftragsverarbeitungsvertrag (AVV) mit Hosting-Anbieter vorhanden

---

## Onboarding eines neuen Projekts

```bash
# 1. Repository anlegen
gh repo create nh-consulting/[kundenname]-website --private

# 2. Projekt initialisieren
pnpm create next-app@latest [kundenname] \
  --typescript --tailwind --eslint --app --src-dir

# 3. Dependencies installieren
pnpm add framer-motion lucide-react clsx tailwind-merge
pnpm add -D @tailwindcss/typography prettier

# 4. Staging-Deployment
vercel --prod=false

# 5. Custom Domain konfigurieren (nach Abnahme)
vercel domains add [kundenname].at
```

---

*TECH_STACK v1.0 | NH Consulting | Stand: Mai 2025*
