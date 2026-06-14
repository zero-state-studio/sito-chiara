# Sito Chiara Lodovici — Psicologa

Sito vetrina della psicologa Chiara Lodovici. Next.js (App Router) + Tailwind v4,
solo modalità light, palette calda pastello, scroll dinamico. Ottimizzato per Vercel.

- **Design system:** vedi `DESIGN.md`
- **Strategia / brand:** vedi `PRODUCT.md`
- **Pagine:** Home (`/`), Chi sono, Cosa faccio, Progetti, Contatti

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Vitest

## Sviluppo

```bash
npm install
cp .env.local.example .env.local   # inserisci NEXT_PUBLIC_WEB3FORMS_KEY
npm run dev                         # http://localhost:3000
```

Comandi:

```bash
npm run build   # build di produzione
npm run lint    # eslint
npm test        # vitest
```

## Form contatti

Il form usa [Web3Forms](https://web3forms.com) (nessun backend). Crea una access key
gratuita associata a `psico.chiaralodovici@gmail.com` e impostala in
`NEXT_PUBLIC_WEB3FORMS_KEY`. I messaggi arrivano a quella casella.

## Deploy su Vercel

1. Importa il repo su Vercel (preset Next.js, zero config).
2. Imposta le variabili d'ambiente in **Project Settings → Environment Variables**:
   - `NEXT_PUBLIC_WEB3FORMS_KEY` — access key Web3Forms
   - `NEXT_PUBLIC_SITE_URL` — URL pubblico (es. `https://psicochiaralodovici.it`), usato da
     metadata, `robots.txt` e `sitemap.xml`
3. Deploy.

## Contenuti

Tutti i testi sono in `content/site.ts` — modificali lì per aggiornare il sito.
La foto di Chiara (pagina *Chi sono*) è un placeholder ad acquerello: sostituiscilo
con la foto reale quando disponibile.
