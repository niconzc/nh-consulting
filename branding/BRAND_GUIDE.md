# NH Consulting — Brand Guide

**Version:** 1.0 | **Stand:** Mai 2025

---

## Markenidentität

### Markenkern

NH Consulting steht für **technische Kompetenz ohne Arroganz**. Kunden bekommen ehrliche Beratung, moderne Technologie und direkte Kommunikation — ohne Agentur-Bullshit.

### Tonalität

| ✅ Ist NH Consulting | ❌ Ist NICHT NH Consulting |
|---|---|
| Direkt, klar | Überheblich, kompliziert |
| Modern, technisch fundiert | Buzzword-lastig, generisch |
| Verlässlich, strukturiert | Vage, unverbindlich |
| Menschlich, direkt | Steif, unpersönlich |
| Ambitioniert | Arrogant |

### Positioning Statement

> "Für Unternehmen, die digitale Lösungen wollen, die wirklich funktionieren — nicht Präsentationen, die beeindrucken aber nie umgesetzt werden."

---

## Farbpalette

### Primärfarben

```css
/* Navy — Vertrauen, Seriosität, Tiefe */
--color-navy-950: #060D1F;
--color-navy-900: #0A1628;
--color-navy-800: #0F2040;
--color-navy-700: #162B52;

/* Blue — Technologie, Klarheit, Moderne */
--color-blue-600: #1A56DB;
--color-blue-500: #2563EB;
--color-blue-400: #3B82F6;
--color-blue-300: #60A5FA;
```

### Neutralfarben

```css
/* Grau — Struktur, Text, Backgrounds */
--color-slate-900: #0F172A;
--color-slate-700: #334155;
--color-slate-500: #64748B;
--color-slate-200: #E2E8F0;
--color-slate-100: #F1F5F9;
--color-white:     #FFFFFF;
```

### Akzentfarbe

```css
/* Electric Blue — CTAs, Highlights, Interaktionen */
--color-accent:    #2563EB;
--color-accent-hover: #1D4ED8;
```

### Hintergrundfarben

```css
/* Dark Mode (primär) */
--bg-primary:   #060D1F;   /* Haupthintergrund */
--bg-secondary: #0A1628;   /* Karten, Sektionen */
--bg-elevated:  #0F2040;   /* Hoverzustände, erhöhte Elemente */

/* Light Mode (optional, für Dokumente) */
--bg-light:     #F8FAFC;
--bg-light-alt: #FFFFFF;
```

---

## Typografie

### Schriftarten

```css
/* Display / Headlines — Stark, technisch, präzise */
font-family: 'Space Grotesk', system-ui, sans-serif;
/* Quelle: Google Fonts */
/* Gewichte: 400, 500, 600, 700 */

/* Body / Interface — Lesbar, sauber, professionell */
font-family: 'Inter', system-ui, sans-serif;
/* Quelle: Google Fonts */
/* Gewichte: 400, 500, 600 */

/* Code / Technisch */
font-family: 'JetBrains Mono', 'Fira Code', monospace;
```

### Typografische Skala

```css
/* Headlines */
--text-display: clamp(2.5rem, 5vw, 4rem);   /* Hero-Überschriften */
--text-h1:      clamp(2rem, 4vw, 3rem);      /* Seitenüberschriften */
--text-h2:      clamp(1.5rem, 3vw, 2rem);    /* Abschnittsüberschriften */
--text-h3:      1.25rem;                      /* Kartenüberschriften */

/* Body */
--text-lg:   1.125rem; /* Intro-Text */
--text-base: 1rem;     /* Standard-Fließtext */
--text-sm:   0.875rem; /* Labels, Captions */
--text-xs:   0.75rem;  /* Tags, Meta-Infos */
```

---

## Logo-Konzept

### Variante 1 — Wortmarke

```
NH Consulting
└─ "NH" in Space Grotesk Bold, Letter-Spacing: -0.05em
└─ "Consulting" in Inter Regular, Letter-Spacing: 0.15em, uppercase, klein
```

### Variante 2 — Icon + Wortmarke

```
[NH] Consulting
└─ [NH] = geometrischer Container (Quadrat mit abgerundeten Ecken)
└─ Innen: "N" und "H" überlagert oder nebeneinander in Blue-600
└─ Hintergrund: Navy-900
```

### Variante 3 — Icon only

```
[NH]
└─ Kompakte Version für Favicon, Social Media Avatar
└─ 1:1 Format
```

### Logo-Farben

| Kontext | Version |
|---|---|
| Dunkler Hintergrund | Logo weiß + Blue-500 Akzent |
| Heller Hintergrund | Logo Navy-900 + Blue-600 Akzent |
| Monochrom | Rein weiß oder rein schwarz |

### Sperrzone

Logo immer mit Mindestabstand = Höhe des "N" auf allen Seiten.

---

## Designprinzipien

### 1. Dark-First
Die primäre Markenerfahrung ist Dark Mode. Tiefes Navy als Basis, nicht reines Schwarz.

### 2. Kein generisches AI-Styling
- ❌ Keine lila/pinken Gradienten
- ❌ Keine "Glow"-Effekte auf allem
- ❌ Keine Roboter-Illustrationen
- ❌ Keine Stock-Fotos mit Händen auf Laptops
- ✅ Scharfe Kanten, klare Typografie
- ✅ Technische Details als Designelemente (Code-Snippets, Zahlen, Linien)
- ✅ Zurückhaltende Animationen (nicht überwältigend)

### 3. Typografie-first
Inhalte über Dekoration. Starke Headlines, klare Struktur.

### 4. Konsistenz
Gleiche Abstände, gleiche Radien, keine spontanen Ausnahmen.

```css
/* Spacing System (4px Basis) */
--space-1:  4px
--space-2:  8px
--space-3:  12px
--space-4:  16px
--space-6:  24px
--space-8:  32px
--space-12: 48px
--space-16: 64px
--space-24: 96px

/* Border Radius */
--radius-sm: 6px
--radius-md: 10px
--radius-lg: 14px
--radius-xl: 20px
```

---

## Bildsprache

### Was funktioniert
- Technische Interfaces, Code-Ausschnitte, Terminal-Fenster
- Minimale Illustrationen (Linien, geometrische Formen)
- Echte Projekt-Screenshots (sobald Portfolio vorhanden)
- Architektur-Diagramme, Flowcharts (technisch, clean)

### Was nicht funktioniert
- Stock-Fotos von lächelnden Business-Menschen
- Generische „Technologie"-Fotos (Platinen, Server)
- Überkomplexe Illustrationen
- Clipart-artige Icons

---

## Stimme & Sprache

### Headlines
Klar, direkt, oft ohne Verb:

- ✅ "Websites, die wirklich verkaufen."
- ✅ "AI-Integration ohne IT-Abteilung."
- ❌ "Wir sind Experten für innovative digitale Transformationslösungen."

### Beschreibungstexte
Konkret, spezifisch, keine leeren Versprechen:

- ✅ "Eine fertige Business-Website in 21 Werktagen. Festpreis. Kein Scope-Creep."
- ❌ "Wir begleiten Sie auf Ihrem digitalen Weg mit maßgeschneiderten Lösungen."

### Calls-to-Action
Aktiv, niedrigschwellig:

- ✅ "Kostenloses Erstgespräch buchen"
- ✅ "Angebot anfragen"
- ✅ "Projekt besprechen"
- ❌ "Jetzt Kontakt aufnehmen und mehr erfahren"

---

## Social Media Branding

### LinkedIn
- Banner: 1584 × 396px, Dark-Navy Hintergrund, Logo links, Tagline rechts
- Profilbild: NH-Icon auf Navy, 800 × 800px
- Posts: Immer mit konsistenter visueller Sprache (Card-Style)

### GitHub
- Profilbild: NH-Icon (gleiche Version wie LinkedIn)
- README: Strukturiert, technisch, professionell

---

*Brand Guide v1.0 | NH Consulting | Nicolas Hauser*
