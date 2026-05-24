# Automatisierungs-Plan — NH Consulting

---

## Phase 1: Eigene Business-Automatisierungen (sofort umsetzbar)

### 1.1 Kontaktformular → E-Mail-Benachrichtigung
**Tool:** Resend + Next.js API Route  
**Zeit:** 1–2 Stunden  
**Beschreibung:** Jede Anfrage über nh-consulting.at wird sofort per E-Mail weitergeleitet.

### 1.2 Rechnungs-Reminder
**Tool:** Google Sheets + Apps Script oder n8n  
**Zeit:** 2–3 Stunden  
**Beschreibung:** Automatische E-Mail-Erinnerung wenn Rechnung nach 10 Tagen noch offen.

### 1.3 Neukunden-Onboarding
**Tool:** E-Mail-Sequenz (Gmail + Canned Responses oder ConvertKit Free)  
**Beschreibung:** Nach Auftragserteilung geht automatisch eine Onboarding-E-Mail mit Materialanfragen raus.

---

## Phase 2: Kunden-Automatisierungen anbieten

### 2.1 AI-Chatbot für Website
**Stack:** Claude API / OpenAI API + Next.js  
**Preis:** €499 einmalig  
**Was es tut:** Beantwortet Kundenfragen auf der Website 24/7

```typescript
// Beispiel-Architektur
POST /api/chat
  → Validierung
  → System-Prompt mit Unternehmens-Kontext
  → Claude API Anfrage
  → Response streamen
```

### 2.2 E-Mail-Klassifizierung und Auto-Antwort
**Stack:** n8n + Claude API  
**Preis:** €999–1.499 Setup  
**Was es tut:** Eingehende E-Mails werden kategorisiert, priorisiert und mit Entwurf-Antwort vorbereitet.

### 2.3 Lead-Qualifizierung
**Stack:** n8n + CRM (HubSpot Free / Airtable) + Claude API  
**Preis:** €1.499–2.499 Setup  
**Was es tut:** Neue Anfragen werden automatisch qualifiziert und im CRM angelegt.

### 2.4 Rechnungsautomatisierung
**Stack:** n8n + Lexoffice API  
**Preis:** €799–1.499 Setup  
**Was es tut:** Aus ausgefüllten Formularen oder Projektstatus-Änderungen automatisch Rechnungen erstellen.

### 2.5 Social Media Publishing
**Stack:** n8n + Buffer API / LinkedIn API  
**Preis:** €499–999 Setup  
**Was es tut:** Content-Kalender → automatisch zu festgelegten Zeiten publizieren.

---

## Phase 3: Lernpfad n8n (Eigenentwicklung)

n8n ist der wichtigste Skill für Automatisierungsprojekte.

### Lernreihenfolge (self-hosted auf Hetzner)

```
Woche 1: n8n selbst hosten (Hetzner VPS, €3–6/Monat)
Woche 2: Erste Workflows (HTTP Request, E-Mail, Google Sheets)
Woche 3: Claude API / OpenAI API einbinden
Woche 4: Webhooks verstehen (Formular → Workflow trigger)
Woche 5: Erstes Kundenprojekt umsetzen
```

### n8n Hosting (günstig)
```
Hetzner VPS CX11: €3,85/Monat
RAM: 2GB, genug für n8n selbst
Docker: docker-compose.yml für n8n
Kosten total: ~€5/Monat inkl. Domain
```

---

## Tools-Übersicht

| Tool | Zweck | Kosten | Wann nutzen |
|---|---|---|---|
| n8n (self-hosted) | Workflow-Automatisierung | ~€5/Mo | Ab Phase 2 |
| Make.com | Alternativer zu n8n | Free Tier | Kleinere Automatisierungen |
| Zapier | Enterprise-Kunden kennen es | Free Tier | Wenn Kunde schon Zapier nutzt |
| Claude API | KI-Aufgaben | Per Token | Immer |
| OpenAI API | GPT-4/ChatGPT | Per Token | Chatbots, Content |
| Resend | E-Mail-Versand API | Free bis 3k/Mo | Eigene Websites + Kunden |

---

*AUTOMATION_PLAN v1.0 | NH Consulting | Stand: Mai 2025*
