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
    sameAs: [
      "https://www.linkedin.com/in/chiara-lodovici-6ab69114b/",
      "https://www.instagram.com/psico.chiaralodovici/",
    ],
    linkedin: "https://www.linkedin.com/in/chiara-lodovici-6ab69114b/",
    instagram: "https://www.instagram.com/psico.chiaralodovici/",
    alboNumber: "11261",
    alboRegion: "Emilia-Romagna",
    alboUrl: "https://www.ordinepsicologier.it/it/albo/11261a-chiara-lodovici",
    vat: "04121090361",
    codiceFiscale: "LDVCHR95L45B819M",
  },

  contatti: {
    title: "Parliamone",
    intro:
      "Fare il primo passo è spesso la parte più difficile. Scrivimi pure: ti risponderò il prima possibile, con calma e riservatezza.",
    submit: "Invia messaggio",
    formNote:
      "Questo è un modulo di primo contatto: non inserire dati su salute, diagnosi o terapie (art. 9 GDPR). Per un minore, scrivi come genitore o tutore.",
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
          "Chiara Lodovici, psicologa (iscritta all’Albo degli Psicologi dell’Emilia-Romagna n° 11261) — Studio A Mente Aperta, Via Giovanni XXIII 110, 41012 Carpi (MO). Email: psico.chiaralodovici@gmail.com. Tel: +39 346 0874159. P.IVA 04121090361 — C.F. LDVCHR95L45B819M.",
        ],
      },
      {
        heading: "Dati raccolti",
        body: [
          "Dati di navigazione: indirizzo IP, data e ora, pagine visitate, tipo di browser/dispositivo e log tecnici, raccolti dall’infrastruttura del sito per il suo funzionamento e la sua sicurezza.",
          "Dati del modulo contatti: nome, indirizzo email, numero di telefono (facoltativo) e contenuto del messaggio. Il modulo non è pensato per raccogliere dati relativi alla salute.",
        ],
      },
      {
        heading: "Finalità del trattamento",
        body: [
          "Gestire le richieste di primo contatto e rispondere; organizzare un eventuale appuntamento; garantire la sicurezza e il corretto funzionamento del sito; mostrare la mappa dello studio tramite Google Maps.",
        ],
      },
      {
        heading: "Base giuridica",
        body: [
          "Art. 6.1.b GDPR (misure precontrattuali su tua richiesta) per la gestione del modulo; art. 6.1.f (legittimo interesse) per sicurezza e funzionamento del sito; art. 6.1.a (consenso) per l’invio del modulo e per i contenuti di terze parti (mappa); art. 9.2.a (consenso esplicito) per eventuali dati relativi alla salute che decidessi di comunicare.",
        ],
      },
      {
        heading: "Destinatari e responsabili del trattamento",
        body: [
          "Vercel Inc. (USA) — hosting e distribuzione del sito; Web3Forms — invio del modulo contatti; Google LLC (USA) — ricezione delle email (Gmail) e mappe (Google Maps). Questi fornitori agiscono come responsabili del trattamento.",
          "Eventuali trasferimenti verso Paesi extra-UE (es. Stati Uniti) avvengono con le garanzie previste dal Capo V del GDPR (EU-US Data Privacy Framework e/o Clausole Contrattuali Standard).",
        ],
      },
      {
        heading: "Conservazione dei dati",
        body: [
          "Richieste di contatto non concretizzate: massimo 6 mesi. In caso di rapporto professionale: per la durata del rapporto e per il periodo previsto dagli obblighi deontologici e di legge. Dati fiscali: 10 anni (art. 2220 c.c.). Log tecnici: per il tempo necessario a sicurezza e funzionamento.",
        ],
      },
      {
        heading: "Dati relativi alla salute",
        body: [
          "Il modulo non è destinato alla raccolta di dati particolari (art. 9 GDPR). Ti invitiamo a non inserire informazioni su stato di salute, diagnosi o terapie nel primo contatto. Se decidi comunque di comunicarli, saranno trattati solo nella misura necessaria a gestire la tua richiesta.",
        ],
      },
      {
        heading: "Minori",
        body: [
          "Se la richiesta riguarda un minore, il primo contatto deve essere effettuato da un genitore o da chi ne esercita la responsabilità genitoriale.",
        ],
      },
      {
        heading: "I tuoi diritti",
        body: [
          "Puoi esercitare in qualsiasi momento i diritti di accesso, rettifica, cancellazione, limitazione, opposizione e portabilità, e revocare il consenso (artt. 15-22 GDPR), scrivendo a psico.chiaralodovici@gmail.com. Hai inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).",
        ],
      },
      {
        heading: "Cookie",
        body: [
          "Il sito utilizza cookie e tecnologie simili come descritto nella Cookie Policy, raggiungibile dal footer.",
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

  // BOZZA di cookie policy — da far validare/personalizzare da un legale.
  cookie: {
    title: "Cookie Policy",
    updated: "[data ultimo aggiornamento]",
    intro:
      "Questa cookie policy spiega come e quali cookie (e tecnologie simili) sono utilizzati su questo sito.",
    sections: [
      {
        heading: "Cosa sono i cookie",
        body: [
          "I cookie sono piccoli file di testo che i siti salvano sul tuo dispositivo durante la navigazione. Tecnologie simili (come il localStorage del browser) memorizzano dati in locale senza trasmetterli a server esterni.",
        ],
      },
      {
        heading: "Cookie utilizzati da questo sito",
        body: [
          "Il sito non utilizza cookie di profilazione o di marketing propri. Le statistiche di utilizzo sono raccolte con Umami e Vercel Speed Insights, che misurano dati aggregati e anonimi senza cookie e senza identificarti. L’infrastruttura di hosting (Vercel) può utilizzare cookie tecnici necessari al funzionamento e alla sicurezza.",
        ],
      },
      {
        heading: "Cookie di terze parti",
        body: [
          "Google Maps: la pagina Contatti incorpora una mappa di Google. Al caricamento, Google può installare cookie (es. NID, CONSENT, SOCS, 1P_JAR, AEC) per preferenze, statistiche e prevenzione degli abusi, con durata variabile da 1 mese a 2 anni.",
          "Web3Forms e Google: all’invio del modulo i dati vengono trasmessi a Web3Forms e a Google (Gmail); possono essere utilizzati cookie tecnici necessari al funzionamento del servizio.",
        ],
      },
      {
        heading: "Trasferimenti verso Paesi terzi",
        body: [
          "Google e Vercel hanno sede negli Stati Uniti; i trasferimenti di dati avvengono con le garanzie previste dal Capo V del GDPR (EU-US Data Privacy Framework e/o Clausole Contrattuali Standard).",
        ],
      },
      {
        heading: "Come gestire o disabilitare i cookie",
        body: [
          "Puoi gestire o disabilitare i cookie dalle impostazioni del tuo browser (Chrome, Firefox, Safari, Edge). La disabilitazione dei cookie di terze parti può impedire la corretta visualizzazione della mappa nella pagina Contatti.",
        ],
      },
      {
        heading: "Aggiornamenti",
        body: [
          "Questa cookie policy può essere aggiornata nel tempo; ti invitiamo a consultarla periodicamente.",
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
