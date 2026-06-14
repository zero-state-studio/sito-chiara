// Central content module. Placeholder copy in Italian — swap freely with real text.
// Brand voice: warm, first-person, calm, never clinical.

export const site = {
  name: "Chiara Lodovici",
  role: "Psicologa",
  email: "psico.chiaralodovici@gmail.com",

  nav: [
    { href: "/", label: "Home" },
    { href: "/chi-sono", label: "Chi sono" },
    { href: "/cosa-faccio", label: "Cosa faccio" },
    { href: "/progetti", label: "Progetti" },
    { href: "/contatti", label: "Contatti" },
  ],

  landing: {
    kicker: "Psicologa",
    hero: "Uno spazio dove osservarsi e acquisire consapevolezza",
    sub: "Mettere in dialogo le emozioni e i vissuti per comprendere come ci sentiamo per poterci situare attivamente nelle relazioni che viviamo.",
    cta: "Scrivimi",
    ctaSecondary: "Scopri chi sono",
    teaserTitle: "Da dove vuoi cominciare?",
    teasers: [
      {
        href: "/chi-sono",
        label: "Chi sono",
        text: "La persona dietro lo studio: il mio approccio fatto di ascolto e fiducia.",
      },
      {
        href: "/cosa-faccio",
        label: "Cosa faccio",
        text: "Percorsi su misura: percorsi psicologici, formazioni e laboratori.",
      },
      {
        href: "/progetti",
        label: "Progetti",
        text: "Iniziative e laboratori per portare il benessere anche fuori dallo studio.",
      },
    ],
  },

  chiSono: {
    title: "Chi sono",
    lead: "Sono Chiara Lodovici.",
    body: [
      "Mi chiamo Chiara e sono una Psicologa e Specializzanda in Psicoterapia Sistemico-Dialogica. Leggere e ri-significare quei «segni che ognuno di noi si porta addosso» è ciò che mi guida nella professione.",
      "Mi occupo di percorsi psicologici prevalentemente con adulti e adolescenti. Al di fuori dello studio, lavoro con adolescenti e giovani adulti in educativa di prossimità e in ambito penitenziario.",
      "Da diversi anni sono inoltre co-founder di Calm, team di psicologi che, in collaborazione con altri professionisti, sviluppa progetti in ambito socio-educativo.",
    ],
    valuesTitle: "Ciò in cui credo",
    values: ["Ascolto", "Empatia", "Riservatezza", "Crescita"],
    photoAlt: "Ritratto di Chiara Lodovici, psicologa, sorridente a braccia conserte",
  },

  cosaFaccio: {
    title: "Cosa faccio",
    lead: "Percorsi pensati intorno a te, ai tuoi tempi e ai tuoi obiettivi.",
    services: [
      {
        title: "Percorsi psicologici individuali, di coppia e familiari",
        text: "Spazi di ascolto e cura su misura — per la persona, la coppia e la famiglia — per attraversare le difficoltà e ritrovare equilibrio.",
      },
      {
        title: "Formazioni esperienziali",
        text: "Percorsi formativi che passano dal vissuto: si apprende facendo, sentendo e rielaborando insieme.",
      },
      {
        title: "Laboratori",
        text: "Attività di gruppo per esplorare emozioni, relazioni e consapevolezza in modo pratico e condiviso.",
      },
    ],
  },

  progetti: {
    title: "Progetti",
    lead: "Il benessere non si ferma alla porta dello studio.",
    // Ogni voce ha una pagina di dettaglio in /progetti/[slug].
    items: [
      {
        slug: "calm",
        title: "CALM",
        summary:
          "Team di psicologi che, in collaborazione con altri professionisti, sviluppa progetti in ambito socio-educativo.",
        body: [
          "CALM è un team di psicologi di cui sono co-founder. Insieme ad altri professionisti, sviluppiamo progetti in ambito socio-educativo, portando l'ascolto e la cura psicologica dentro i contesti di vita delle persone.",
          "Lavoriamo con scuole, comunità ed enti del territorio per costruire spazi di confronto, prevenzione e crescita condivisa.",
          "Descrizione in aggiornamento — aggiungi qui i dettagli e le iniziative del progetto.",
        ],
      },
      {
        slug: "oltre-le-parole",
        title: "Oltre le parole: Narrazioni condivise",
        summary:
          "Un percorso di narrazione condivisa per dare voce ai vissuti e costruire significati insieme.",
        body: [
          "«Oltre le parole: Narrazioni condivise» è un progetto dedicato al racconto di sé e all'ascolto reciproco, dove la narrazione diventa strumento di cura e di relazione.",
          "Descrizione in aggiornamento — aggiungi qui gli obiettivi, le attività e i destinatari del progetto.",
        ],
      },
    ],
    detailBack: "Tutti i progetti",
  },

  cta: {
    title: "Facciamo il primo passo insieme",
    text: "Se senti che è il momento, scrivimi: ci prendiamo il tempo che serve.",
    button: "Scrivimi",
  },

  // Dati per SEO locale / dati strutturati. Riempi i campi vuoti per
  // potenziare il posizionamento locale (compaiono nello schema JSON-LD).
  business: {
    areaServed: "", // es. "Milano" o "Torino e online" — zona in cui riceve
    telephone: "", // es. "+39 333 1234567" (opzionale)
    streetAddress: "", // indirizzo studio (opzionale)
    addressLocality: "", // città
    postalCode: "",
    sameAs: [] as string[], // URL profili social: Instagram, LinkedIn, ...
  },

  contatti: {
    title: "Parliamone",
    intro:
      "Fare il primo passo è spesso la parte più difficile. Scrivimi pure: ti risponderò il prima possibile, con calma e riservatezza.",
    submit: "Invia messaggio",
    formNote: "I tuoi dati restano riservati e non saranno condivisi.",
  },
} as const;
