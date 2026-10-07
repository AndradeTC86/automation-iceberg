window.IcebergLocales = window.IcebergLocales || {};
window.IcebergLocales.it = {
  names: {
    ui: 'Test di UI',
    db: 'Test di database',
    int: 'Test di integrazione',
    api: 'Test di API',
    comp: 'Test di componente',
    unit: 'Test unitari'
  },
  depth: {
    ui: 'superficie',
    db: '10 m',
    int: '20 m',
    api: '30 m',
    comp: '40 m',
    unit: '50 m'
  },
  labels: ['Velocità', 'Stabilità', 'Realismo'],
  meterNote: 'Realismo: quanto il test è vicino a ciò che l’utente vive davvero.',
  ofFive: '{v} di 5',
  surface: 'superficie',
  prog: 'Scenario {n} di {t}',
  result: 'Risultato',
  score: '{s} di {t}',
  high: 'Pensate già come chi costruisce la suite dal basso verso l’alto.',
  mid: 'Buon inizio. Rileggete gli strati in cui avete sbagliato.',
  low: 'Vale la pena ripercorrere l’iceberg con calma, dall’alto verso il basso.',
  again: 'Riprova',
  next: 'Scenario successivo',
  finish: 'Vedi risultato',
  correct: 'Esatto. ',
  wrong: 'Lo strato più economico per individuare questo bug è {name}. ',
  hero: {
    title: 'Ciò che si nasconde sotto la superficie nell’automazione dei test',
    lede: 'La maggior parte del valore dei test automatizzati non è sulla schermata che l’utente vede. È negli strati sottostanti: più veloci, meno costosi da mantenere e più facili da diagnosticare. Scorrere il testo o fare clic su uno strato dell’iceberg.'
  },
  readoutLabel: 'Strato attuale:',
  ariaGoTo: 'Vai a ',
  quizTitle: 'Quale livello rileverebbe questo bug?',
  ariaStage: 'Iceberg degli strati di test',
  ariaBerg: 'Iceberg con sei strati di test, dall’interfaccia in cima ai test unitari in fondo',
  intro: '<h2>Perché un iceberg?</h2><p>I test di interfaccia sono la parte visibile. Sono facili da dimostrare e capire, perché riproducono ciò che una persona farebbe nel prodotto. Ma sono la fetta più piccola di una buona strategia.</p><p>Ogni strato sotto copre un tipo diverso di errore. E più ci si addentra, più rapido è il feedback: un test unitario gira in millisecondi, un test di UI può impiegare minuti.</p><p>Questo articolo attraversa i sei strati dell’iceberg, dall’alto verso il basso, con gli strumenti tipici di ciascuno.</p><p class="note">Le note di velocità, stabilità e realismo sono un riferimento generale, non misure. Variano molto da progetto a progetto.</p>',
  sections: [
    {
      id: 'ui',
      meters: '1,2,5',
      content: '<p>Controllano un browser o un’app mobile come farebbe una persona: cliccano, digitano e aspettano che la schermata cambi. È l’unico strato che vede l’intero prodotto funzionare insieme.</p><ul class="chips"><li>Playwright</li><li>Cypress</li><li>Selenium</li><li>Appium</li></ul><p>Playwright, Cypress e Selenium automatizzano il web. Appium fa lo stesso per le app mobili.</p><h3>Quando usarli</h3><p>Per pochi flussi critici end-to-end, come login, ricerca e pagamento. Confermano che gli strati inferiori, sommati, offrono un’esperienza che funziona.</p><h3>Da tenere d’occhio</h3><p>Sono i più lenti e i più soggetti a errori intermittenti (“flaky”), perché dipendono dalla rete, dalle animazioni e da tutto l’ambiente. Se testate la regola di business attraverso la schermata, ogni modifica visiva rompe decine di test.</p><p><strong>Regola pratica:</strong> se puoi verificarlo in uno strato più in basso, fallo lì.</p>'
    },
    {
      id: 'db',
      meters: '3,4,3',
      content: '<p>Verificano schema, migration, query e regole che vivono nel database stesso, come constraints, trigger e stored procedure.</p><ul class="chips"><li>DBUnit</li><li>Flyway</li><li>SQLTest</li></ul><p>DBUnit prepara e confronta dataset. Flyway applica migration versionate, quindi eseguirle contro un database vuoto nell’integrazione continua rivela già molti errori. SQLTest copre routine e query SQL.</p><h3>Quando usarli</h3><p>Per validare migration, query critiche e integrità dei dati: chiavi, unicità e valori obbligatori.</p><h3>Da tenere d’occhio</h3><p>Ogni esecuzione deve partire da uno stato noto. Un database condiviso tra test crea dipendenze invisibili: un test passa solo perché un altro è stato eseguito prima.</p>'
    },
    {
      id: 'int',
      meters: '2,3,4',
      content: '<p>Controllano che due o più parti reali funzionino bene insieme: il vostro servizio con il database, con una coda o con un altro sistema.</p><ul class="chips"><li>Pytest</li><li>TestContainers</li><li>WireMock</li></ul><p>TestContainers avvia dipendenze reali, come database e broker, in container effimeri. WireMock simula API esterne, comprese risposte lente e errori. Pytest organizza ed esegue tutto.</p><h3>Quando usarli</h3><p>Nei punti di contatto tra sistemi: come il vostro codice reagisce a un timeout da un servizio esterno, a una risposta inattesa o a un messaggio duplicato.</p><h3>Da tenere d’occhio</h3><p>Sono più lenti dei test unitari. Concentratevi sui confini e non ripetete qui la logica di business già coperta più in basso.</p>'
    },
    {
      id: 'api',
      meters: '4,4,3',
      content: '<p>Chiamano gli endpoint direttamente, senza passare attraverso la schermata. Verificano codici di stato, corpi di risposta, contratti, autenticazione e le regole di business esposte dal servizio.</p><ul class="chips"><li>Postman</li><li>Rest Assured</li><li>Jest</li><li>Pytest + Requests</li></ul><p>Postman è ottimo per esplorare e costruire collezioni. Rest Assured (Java), Jest (JavaScript) e Pytest + Requests (Python) permettono di scrivere i test in codice, versionati insieme al progetto.</p><h3>Quando usarli</h3><p>Per validare contratti, permessi e casi di errore: campi mancanti, token non validi, risorse inesistenti. È lo strato con il miglior rapporto costo/conferma per chi usa l’API.</p><h3>Da tenere d’occhio</h3><p>Un contratto che cambia senza preavviso rompe i propri consumatori. Se più team dipendono dalla stessa API, considera di aggiungere test di contratto.</p>'
    },
    {
      id: 'comp',
      meters: '4,4,2',
      content: '<p>Testano un pezzo dell’interfaccia in isolamento. Rendono il componente, simulano clic e input e verificano ciò che appare, senza avviare tutta l’app o il backend reale.</p><ul class="chips"><li>React Testing Library</li><li>Vue Test Utils</li></ul><p>Entrambe le librerie incoraggiano a testare ciò che la persona percepisce a schermo, non dettagli interni di implementazione.</p><h3>Quando usarli</h3><p>Per gli stati di un componente: caricamento, vuoto, errore. Anche per la validazione dei moduli e il comportamento di pulsanti e menu.</p><h3>Da tenere d’occhio</h3><p>Testare lo stato interno del componente rende la suite fragile: qualsiasi refactor rompe i test anche quando il comportamento non è cambiato. Preferisci verificare il risultato visibile.</p>'
    },
    {
      id: 'unit',
      meters: '5,5,1',
      content: '<p>Testano la parte più piccola di codice, una funzione o una classe, isolata dal resto. Corrono in millisecondi e indicano la riga esatta in cui qualcosa si è rotto. Sono la base di tutta la suite.</p><ul class="chips"><li>Jest</li><li>JUnit</li><li>pytest</li></ul><p>Gli strumenti di unit testing offrono velocità e chiarezza. Permettono di coprire molte regole di calcolo, trasformazioni e comportamenti semplici senza un costo elevato.</p><h3>Quando usarli</h3><p>Per qualsiasi regola di business che può essere espressa con pochi input e output. È il posto migliore per validare logica e casi limite.</p><h3>Da tenere d’occhio</h3><p>Non confondere copertura con fiducia. Un test unitario debole può aumentare la sensazione di sicurezza mentre nasconde il vero comportamento del sistema.</p>'
    }
  ],
  summary: {
    title: 'Come costruire la suite',
    content: '<p>Inizia dalla base e sali in base al rischio. Molti test unitari, buona copertura di API e integrazione nei punti critici, e pochi test di UI per i flussi che non possono fallire.</p><p>L’obiettivo non è avere uno strato di ogni tipo. È far sì che ogni possibile errore venga rilevato nello strato più economico in grado di vederlo.</p>'
  },
  scen: [
    {
      t: 'Una funzione che calcola lo sconto di un coupon restituisce un valore negativo quando il coupon è più grande dell’ordine.',
      a: 'unit',
      why: 'È una regola di calcolo isolata. Un test unitario con questo caso limite rileva l’errore in millisecondi e mostra la riga esatta.'
    },
    {
      t: 'Il pulsante “Finalizza acquisto” rimane disabilitato dopo che la persona corregge l’errore nel modulo, ma solo dentro la schermata di checkout.',
      a: 'comp',
      why: 'Il problema è nel comportamento di un componente. Renderizzarlo isolato, inserire un valore valido e controllare il pulsante risolve senza avviare tutta l’app.'
    },
    {
      t: 'L’API risponde 200, ma omette il campo “status” che l’app mobile si aspetta.',
      a: 'api',
      why: 'È un problema di contratto di risposta. Un test di API che valida il corpo della risposta rileva il campo mancante direttamente all’endpoint.'
    },
    {
      t: 'Una migration ha rinominato una colonna e la query del report mensile si è rotta in produzione.',
      a: 'db',
      why: 'Eseguire le migration su un database vuoto e lanciare le query critiche nell’integrazione continua avrebbe rivelato la colonna mancante prima del deploy.'
    },
    {
      t: 'Il servizio di pagamento di terze parti ha iniziato a rispondere lentamente e il nostro sistema non gestisce il timeout.',
      a: 'int',
      why: 'È un punto di contatto tra sistemi. Con WireMock simuli la risposta lenta e verifichi come reagisce il tuo servizio.'
    },
    {
      t: 'Il flusso completo di login, carrello e pagamento deve funzionare in Safari su iPhone.',
      a: 'ui',
      why: 'Solo un test end-to-end in un browser reale vede l’intera esperienza. Tienili pochi, per i flussi critici.'
    }
  ]
};
