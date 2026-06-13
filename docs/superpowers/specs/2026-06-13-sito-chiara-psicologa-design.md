# Sito Chiara Lodovici — Psicologa — Design Spec

**Data:** 2026-06-13
**Stato:** Approvato

## Obiettivo

Sito vetrina per Chiara Lodovici, psicologa. Trasmettere calma e sicurezza tramite
palette pastello calda (prevalentemente arancione), forme organiche e flussi di scroll
dinamici. Solo modalità light. Veloce, ottimizzato per deploy su Vercel.

## Brand

Riferimenti in `docs/demo-assets/`:
- **Logo:** fiamma stilizzata in arancio acquerello.
- **Wordmark:** "Chiara Lodovici / Psicologa" in corsivo a mano.
- **Stile:** acquerello caldo, organico, morbido. Pesca, terracotta, crema.

## Stack tecnico

| Scelta | Tecnologia |
|--------|------------|
| Framework | Next.js (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Animazioni | Motion (Framer Motion) |
| Font | next/font (Caveat + Nunito) |
| Immagini | next/image |
| Form mail | Web3Forms (no backend) |
| Hosting | Vercel (SSG) |

Rendering: prevalentemente statico (SSG). Nessun backend custom — il form usa l'endpoint
Web3Forms che inoltra le mail a `psico.chiaralodovici@gmail.com`.

## Struttura — multi-pagina

| Route | Sezione | Contenuto |
|-------|---------|-----------|
| `/` | Landing | Hero logo-fiamma animato, intro breve, teaser delle sezioni, box contatti in fondo |
| `/chi-sono` | Chi sono | Bio, foto, approccio, valori |
| `/cosa-faccio` | Cosa faccio | Card servizi (terapia individuale, coppia, gestione ansia, ecc.) |
| `/progetti` | Progetti | Griglia progetti/iniziative |
| `/contatti` | Contatti | Box contatti (form) + info di contatto |

Il box contatti compare in **due punti**: in fondo alla Landing e nella pagina Contatti
(stesso componente riusato).

## Componenti condivisi

- **`Navbar`** — sticky, logo + link di navigazione. Trasparente in cima, solida su scroll.
- **`Footer`** — info essenziali, link, copyright.
- **`ContactBox`** — form contatti riusabile (nome, email, messaggio) → Web3Forms.
- **`FlameLogo`** — fiamma SVG inline ricreata dallo schizzo, animabile.
- **`Section`** — wrapper con scroll-reveal (fade + slide su `whileInView`).
- **`Divider`** — divisori organici a onda/blob SVG tra i blocchi.

## Design system (solo light)

| Token | Valore | Uso |
|-------|--------|-----|
| `bg-cream` | `#FDF8F2` | Sfondo principale (carta) |
| `orange-primary` | `#E8915B` | Arancio terracotta-pesca, CTA, accenti |
| `orange-accent` | `#C7693D` | Terracotta scuro, hover/dettagli |
| `peach-light` | `#F8D9BE` | Blob, card |
| `peach-lighter` | `#FCEBD8` | Superfici secondarie |
| `text-warm` | `#3D3128` | Testo (bruno caldo, no nero puro) |

- **Texture:** velatura acquerello sottile come sfondo decorativo.
- **Forme organiche:** blob acquerello decorativi, divisori onda/blob tra sezioni.
- **Font:** Caveat (corsivo — logo, titoli accento), Nunito (corpo, leggibile).
- **Spaziature compatte:** sezioni ravvicinate, sovrapposte con blob → il sito non deve
  mai sembrare vuoto. Limitare lo spazio bianco tra i concetti.

## Dinamicità / scroll

- Scroll-reveal fade + slide sulle sezioni (`whileInView`).
- Parallax sui blob dell'hero.
- Flicker/draw-in del logo-fiamma.
- Divisori organici (onda/blob) tra i blocchi per fluidità.
- Micro-interazioni hover su card e bottoni.
- Transizioni tra pagine.

## Form contatti

- Campi: nome, email, messaggio (+ honeypot anti-spam).
- Invio via Web3Forms con access key (variabile d'ambiente
  `NEXT_PUBLIC_WEB3FORMS_KEY`).
- Stati: idle → invio → successo / errore, con feedback visivo.
- Destinatario: `psico.chiaralodovici@gmail.com`.

## Contenuti

Testi placeholder realistici in italiano, strutturati per essere sostituiti facilmente
(es. file `content/` o costanti dedicate). Immagini: placeholder ottimizzati.

## Performance / Vercel

- SSG per tutte le pagine.
- `next/font` (no layout shift), `next/image` (ottimizzazione automatica).
- JS client limitato ai componenti con animazione.
- Target Lighthouse alto (performance, accessibilità, SEO).
- Metadata SEO per pagina + Open Graph.

## Out of scope

- Backend custom / database.
- CMS / area amministrativa.
- Modalità dark.
- Autenticazione / area riservata.
- Booking / calendario appuntamenti (eventuale fase futura).
