# Kunden-Prozess — NH Consulting

> Standardprozess von der ersten Anfrage bis zur Projektabnahme.

---

## Übersicht: Projektphasen

```
Anfrage → Erstgespräch → Angebot → Vertrag → Kickoff → Entwicklung → Review → Launch → Abschluss
```

---

## Phase 1: Erstanfrage

**Trigger:** Kontaktformular, E-Mail, LinkedIn-Nachricht, Empfehlung

**Reaktionszeit:** max. 24 Stunden (Werktage)

**Antwort-Template:**
```
Betreff: Re: Ihre Anfrage / [Projektname]

Hallo [Vorname],

vielen Dank für Ihre Anfrage.

Ich melde mich gerne für ein kurzes Erstgespräch (ca. 20–30 Minuten),
um Ihre Anforderungen besser zu verstehen und ein passendes Angebot
zu erstellen.

Passt Ihnen [DATUM] um [UHRZEIT] Uhr? Alternativ: [DATUM2].

Wir können per Telefon, Zoom oder Google Meet sprechen – je nachdem
was für Sie am bequemsten ist.

Mit freundlichen Grüßen
Nicolas Hauser
NH Consulting
+43 [TELEFON]
nh-consulting.at
```

---

## Phase 2: Erstgespräch

**Dauer:** 20–30 Minuten  
**Format:** Zoom, Google Meet oder Telefon

**Agenda:**
1. Kurze Vorstellung NH Consulting (2 Min)
2. Projekt des Kunden verstehen (10–15 Min):
   - Was genau wird gebraucht?
   - Gibt es eine bestehende Website?
   - Zielgruppe / Besucher?
   - Besondere Funktionen?
   - Zeitplan / Deadline?
   - Budget-Rahmen?
3. Kurze Erklärung wie wir arbeiten (3–5 Min)
4. Nächste Schritte besprechen: Angebot bis [DATUM]

**Notizen sofort nach dem Gespräch festhalten** (Notion oder Markdown-Datei)

---

## Phase 3: Angebotserstellung

**Frist:** Maximal **3 Werktage** nach Erstgespräch

**Angebot enthält:**
- Genaue Leistungsbeschreibung
- Was ist NICHT enthalten
- Preis (Festpreis)
- Zahlungsmodalitäten (50/50)
- Lieferzeit
- Meilensteine

**Angebots-Vorlage:**
```markdown
# Angebot: [Projektname]
**Angebotsnummer:** NH-ANGEBOT-[JAHR]-[NR]
**Datum:** [TT.MM.JJJJ]
**Gültig bis:** [14 Tage nach Datum]

## Leistungsumfang
[Genaue Beschreibung]

## Nicht inbegriffen
[Was der Kunde selbst liefert]

## Preis
[BETRAG] € (inkl. aller vereinbarten Leistungen)
Zahlungsziel: 50% Anzahlung, 50% bei Abnahme

## Lieferzeit
[X] Werktage nach Anzahlung und vollständiger Material-Lieferung

## Nächste Schritte
Bei Auftragserteilung: Bitte dieses Angebot per E-Mail bestätigen.
Danach senden wir die Anzahlungsrechnung.
```

---

## Phase 4: Auftragsbestätigung & Vertrag

**Ablauf:**
1. Kunde bestätigt Angebot (E-Mail genügt)
2. Werkvertrag zusenden (aus `/legal/templates/contract-webdesign.md`)
3. Anzahlungsrechnung (50%) ausstellen
4. **Erst nach Zahlungseingang** mit Arbeiten beginnen

> ⚠️ Keine Arbeit ohne Anzahlung. Ausnahme: Sehr bekannte Kunden / Stammkunden.

---

## Phase 5: Kickoff

**E-Mail nach Zahlungseingang:**
```
Betreff: Projektstart [Projektname] — Was wir von Ihnen brauchen

Hallo [Vorname],

die Anzahlung ist eingegangen — danke! Wir starten jetzt.

Damit wir loslegen können, benötigen wir bis [DATUM]:

□ Alle Texte (kann auch ein Google Doc sein)
□ Bilder / Fotos (Qualität: mind. 1500px Breite)
□ Ihr Logo als SVG oder AI/EPS
□ Zugangsdaten (falls bestehende Domain): [Domain-Provider, ggf. cPanel]

Haben Sie Fragen oder Beispiele von Websites, die Ihnen gefallen?
Das hilft uns beim Design sehr.

Wir melden uns spätestens [DATUM] mit dem ersten Designentwurf.

Grüße
Nicolas
```

---

## Phase 6: Entwicklung

**Intern:**
- [ ] Notion-Projektseite anlegen
- [ ] GitHub Repository erstellen (privat, Kundenname)
- [ ] Design in Figma (Mockup 2 Varianten, Desktop + Mobile)
- [ ] Design-Review mit Kunden → Freigabe einholen
- [ ] Entwicklung starten (Next.js / TypeScript / Tailwind)
- [ ] Staging-Deployment (z.B. `[kunde].vercel.app`)
- [ ] Testen: Mobile, Desktop, Tablet
- [ ] Testen: Alle Links, Formulare, CMS
- [ ] Performance Check (Lighthouse > 90)
- [ ] SEO-Check (Meta-Tags, Sitemap, robots.txt)

---

## Phase 7: Review & Feedback

**Staging-URL zum Kunden senden:**
```
Betreff: Ihre Website zur Prüfung — [Projektname]

Hallo [Vorname],

Ihre Website ist fertig zum Prüfen!

Vorschau: https://[kunde-preview].vercel.app

Bitte geben Sie uns Feedback bis [DATUM] (5 Werktage):
- Was soll geändert werden?
- Was gefällt Ihnen gut?
- Sind alle Texte/Inhalte korrekt?

Anmerkungen können Sie mir direkt per E-Mail oder in einer Liste schicken.

Im Preis inbegriffen: 2 Überarbeitungsrunden.
```

**Feedback-Runden tracken** — nach 2 Runden: Nachberechnung ankündigen.

---

## Phase 8: Launch

**Checkliste vor Live-Schaltung:**
- [ ] Domain auf Vercel/Hosting konfiguriert
- [ ] SSL-Zertifikat aktiv (https://)
- [ ] Google Analytics eingerichtet
- [ ] Sitemap bei Google Search Console eingereicht
- [ ] Datenschutzerklärung / Impressum geprüft
- [ ] Cookie-Banner funktioniert
- [ ] Kontaktformular testet (echte E-Mail kommt an)
- [ ] Letzter Lighthouse-Test: Performance, Accessibility, SEO
- [ ] Mobile-Test auf echtem Gerät

**Launch-E-Mail:**
```
Betreff: 🚀 Ihre Website ist live! — [URL]

Hallo [Vorname],

Herzlichen Glückwunsch — Ihre Website ist jetzt live unter:
👉 https://[nh-consulting.at]

[Kurze Zusammenfassung was gemacht wurde]

Nächste Schritte:
1. Überweisen Sie bitte die Restzahlung (Rechnung im Anhang).
2. Ihr Zugang zum CMS: [URL] | Login-Daten separat per 1Password/E-Mail.
3. Wir empfehlen ein Wartungspaket für regelmäßige Updates (siehe Anhang).

Bei Fragen bin ich jederzeit erreichbar.

Beste Grüße
Nicolas
```

---

## Phase 9: Abschluss

**Innerhalb 7 Tage nach Launch:**
- [ ] Restzahlungsrechnung gestellt und beglichen
- [ ] Zugangsdaten dokumentiert und sicher übergeben
- [ ] Projekt-Screenshots für Portfolio (vorher Erlaubnis einholen)
- [ ] Google-Bewertung anfragen (sofern Kunde zufrieden)
- [ ] Wartungsvertrag anbieten
- [ ] Lessons learned dokumentieren (was lief gut, was nicht?)

---

## Kunden-Tracking (einfach)

| # | Kundenname | Status | Angebot | Preis | Bezahlt | Notizen |
|---|---|---|---|---|---|---|
| 1 | [Firma] | 🟡 Erstgespräch | - | - | - | - |
| 2 | [Firma] | 🟠 Angebot | €2.999 | - | - | - |
| 3 | [Firma] | 🟢 In Entwicklung | €1.499 | 50% | ✓ | Launch: 20.06. |
| 4 | [Firma] | ✅ Abgeschlossen | €2.999 | 100% | ✓ | Wartung ab Jul |

**Status-Legende:**
- 🔵 Anfrage eingegangen
- 🟡 Erstgespräch geplant
- 🟠 Angebot verschickt
- 🟢 In Entwicklung
- ✅ Abgeschlossen
- 🔴 Storniert

---

*CLIENT_PROCESS v1.0 | NH Consulting | Stand: Mai 2025*
