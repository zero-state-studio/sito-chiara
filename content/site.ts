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
    kicker: "Carpi (Modena)",
    hero: "Un luogo dove osservarsi e acquisire consapevolezza",
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
      "Mi chiamo Chiara e sono una Psicologa iscritta all’albo (n° 11261) e Specializzanda in Psicoterapia Sistemico-Dialogica. Leggere e ri-significare quei «segni che ognuno di noi si porta addosso» è ciò che mi guida nella professione.",
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
        logo: "/calm/Logo_Horizontal_Blue.png",
        image: "",
        imageAlt: "",
        summary:
          "Team di psicologi che, in collaborazione con altri professionisti, sviluppa progetti in ambito socio-educativo.",
        body: [
          "CALM è un team di psicologi di cui sono co-founder. Insieme ad altri professionisti, sviluppiamo progetti in ambito socio-educativo, portando l'ascolto e la cura psicologica dentro i contesti di vita delle persone.",
          "Lavoriamo con scuole, comunità ed enti del territorio per costruire spazi di confronto, prevenzione e crescita condivisa.",
          "Descrizione in aggiornamento...",
        ],
      },
      {
        slug: "oltre-le-parole",
        title: "Oltre le parole: Narrazioni condivise",
        logo: "",
        image: "/dixit/dixit.jpeg",
        imageAlt:
          "Sessione di gruppo «Oltre le parole»: carte Dixit e post-it su cui costruire narrazioni condivise.",
        summary:
          "Un percorso di narrazione condivisa per dare voce ai vissuti e costruire significati insieme.",
        body: [
          "«Oltre le parole: Narrazioni condivise» è un progetto dedicato al racconto di sé e all'ascolto reciproco, dove la narrazione diventa strumento di cura e di relazione.",
          "Descrizione in aggiornamento...",
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
    studioName: "Studio A Mente Aperta",
    areaServed: "Modena",
    telephone: "+39 346 0874159",
    telephoneHref: "+393460874159", // per il link tel:
    streetAddress: "Via Giovanni XXIII, 110",
    addressLocality: "Carpi",
    addressRegion: "MO",
    postalCode: "41012",
    sameAs: ["https://linkedin.com/in/chiara-lodovici-6ab69114b/"],
  },

  contatti: {
    title: "Parliamone",
    intro:
      "Fare il primo passo è spesso la parte più difficile. Scrivimi pure: ti risponderò il prima possibile, con calma e riservatezza.",
    submit: "Invia messaggio",
    formNote:
      "Per riservatezza, evita di inserire dati sensibili sulla salute nel messaggio.",
  },

  // BOZZA di informativa privacy — da far validare/personalizzare da un legale.
  privacy: {
    title: "Informativa privacy",
    updated: "[data ultimo aggiornamento]",
    intro:
      "Questa informativa descrive come vengono trattati i dati personali raccolti tramite questo sito, ai sensi del Regolamento (UE) 2016/679 (GDPR).",
    sections: [
      {
        heading: "Titolare del trattamento",
        body: [
          "Chiara Lodovici — Studio A Mente Aperta, Via Giovanni XXIII 110, 41012 Carpi (MO). Email: psico.chiaralodovici@gmail.com. [Inserire eventuale P.IVA / codice fiscale.]",
        ],
      },
      {
        heading: "Dati raccolti",
        body: [
          "Tramite il modulo contatti: nome, indirizzo email, numero di telefono (facoltativo) e il contenuto del messaggio. Durante la navigazione: dati tecnici aggregati e anonimi a scopo statistico (vedi “Statistiche del sito”).",
        ],
      },
      {
        heading: "Finalità e base giuridica",
        body: [
          "I dati del modulo sono trattati per rispondere alla tua richiesta e organizzare un eventuale primo contatto, sulla base del tuo consenso (art. 6.1.a GDPR).",
          "Ti invitiamo a non inserire nel messaggio dati particolari relativi alla salute. Qualora tu scelga di comunicarli, il trattamento avviene sulla base del tuo consenso esplicito (art. 9.2.a GDPR).",
        ],
      },
      {
        heading: "Destinatari e trasferimenti",
        body: [
          "Il modulo è gestito tramite il servizio Web3Forms, che inoltra i messaggi a una casella di posta Google (Gmail). Questi fornitori agiscono come responsabili del trattamento. Alcuni dati possono essere trattati su server situati fuori dall’Unione Europea (es. Stati Uniti), con le garanzie adeguate previste dal GDPR.",
        ],
      },
      {
        heading: "Conservazione",
        body: [
          "I dati sono conservati per il tempo necessario a gestire la richiesta e gli eventuali contatti successivi, e poi cancellati.",
        ],
      },
      {
        heading: "Statistiche del sito",
        body: [
          "Il sito utilizza Umami e Vercel Speed Insights per raccogliere dati aggregati e anonimi sull’uso del sito, senza cookie di profilazione e senza identificarti.",
        ],
      },
      {
        heading: "I tuoi diritti",
        body: [
          "Puoi richiedere in qualsiasi momento accesso, rettifica, cancellazione, limitazione, opposizione e portabilità dei dati, e revocare il consenso, scrivendo a psico.chiaralodovici@gmail.com. Hai inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).",
        ],
      },
      {
        heading: "Nota",
        body: [
          "Questo testo è una bozza di partenza e deve essere personalizzato e validato da un professionista prima della pubblicazione definitiva.",
        ],
      },
    ],
  },

  thankYou: {
    title: "Grazie di cuore",
    message:
      "Il tuo messaggio è arrivato. Ti contatterò il prima possibile, con calma e attenzione. A presto.",
    button: "Torna alla home",
    photoAlt: "Chiara Lodovici, psicologa",
  },
} as const;
