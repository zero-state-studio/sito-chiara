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
    hero: "Uno spazio sicuro per ritrovare il tuo equilibrio",
    sub: "Ti accompagno con ascolto e calma lungo il tuo percorso di benessere. Un passo alla volta, senza fretta e senza giudizio.",
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
        text: "Percorsi su misura per te: terapia individuale, coppia, gestione dell'ansia.",
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
    lead: "Sono Chiara Lodovici, psicologa.",
    body: [
      "Credo in una relazione di cura fondata su ascolto, rispetto e fiducia. Non esistono percorsi uguali: ognuno porta con sé la propria storia, i propri tempi e le proprie risorse.",
      "Il mio lavoro mette al centro la persona, in uno spazio accogliente e senza giudizio, dove sentirsi liberi di essere sé stessi è già il primo passo del cambiamento.",
    ],
    valuesTitle: "Ciò in cui credo",
    values: ["Ascolto", "Empatia", "Riservatezza", "Crescita"],
    photoAlt: "Ritratto di Chiara Lodovici (foto in arrivo)",
  },

  cosaFaccio: {
    title: "Cosa faccio",
    lead: "Percorsi pensati intorno a te, ai tuoi tempi e ai tuoi obiettivi.",
    services: [
      {
        title: "Terapia individuale",
        text: "Un percorso personale per attraversare ansia, stress e momenti di difficoltà, ritrovando chiarezza e fiducia.",
      },
      {
        title: "Sostegno di coppia",
        text: "Uno spazio di dialogo protetto per riscoprire comprensione, ascolto e vicinanza.",
      },
      {
        title: "Gestione dell'ansia",
        text: "Strumenti concreti per riconoscere l'ansia e ritrovare calma nel quotidiano.",
      },
      {
        title: "Percorsi di crescita",
        text: "Conoscersi meglio per vivere con più consapevolezza, serenità e libertà.",
      },
    ],
  },

  progetti: {
    title: "Progetti",
    lead: "Il benessere non si ferma alla porta dello studio.",
    items: [
      {
        title: "Gruppi di ascolto",
        text: "Incontri di gruppo dedicati al benessere emotivo e alla condivisione.",
      },
      {
        title: "Workshop benessere",
        text: "Laboratori pratici su gestione dello stress, emozioni e mindfulness.",
      },
      {
        title: "Sportello scuole",
        text: "Supporto psicologico per studenti, insegnanti e famiglie.",
      },
    ],
  },

  contatti: {
    title: "Parliamone",
    intro:
      "Fare il primo passo è spesso la parte più difficile. Scrivimi pure: ti risponderò il prima possibile, con calma e riservatezza.",
    formNote: "I tuoi dati restano riservati e non saranno condivisi.",
  },
} as const;
