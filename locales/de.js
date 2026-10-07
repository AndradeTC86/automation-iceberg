window.IcebergLocales = window.IcebergLocales || {};
window.IcebergLocales.de = {
  names: {
    ui: 'UI-Tests',
    db: 'Datenbank-Tests',
    int: 'Integrationstests',
    api: 'API-Tests',
    comp: 'Komponententests',
    unit: 'Unit-Tests'
  },
  depth: {
    ui: 'Oberfläche',
    db: '10 m',
    int: '20 m',
    api: '30 m',
    comp: '40 m',
    unit: '50 m'
  },
  labels: ['Geschwindigkeit', 'Stabilität', 'Realismus'],
  meterNote: 'Realismus: Wie nah der Test an der tatsächlichen Benutzererfahrung liegt.',
  ofFive: '{v} von 5',
  surface: 'Oberfläche',
  prog: 'Szenario {n} von {t}',
  result: 'Ergebnis',
  score: '{s} von {t}',
  high: 'Sie denken schon wie jemand, der die Suite von unten nach oben aufbaut.',
  mid: 'Guter Start. Lesen Sie die Schichten noch einmal, in denen Sie Fehler gemacht haben.',
  low: 'Es lohnt sich, den Eisberg erneut ruhig von oben nach unten zu durchgehen.',
  again: 'Erneut versuchen',
  next: 'Nächstes Szenario',
  finish: 'Ergebnis anzeigen',
  correct: 'Genau. ',
  wrong: 'Die günstigste Schicht, um diesen Fehler zu erkennen, ist {name}. ',
  hero: {
    title: 'Was unter der Oberfläche der Testautomatisierung verborgen liegt',
    lede: 'Der größte Teil des Werts automatisierter Tests steckt nicht auf dem Bildschirm, den der Benutzer sieht. Er liegt in den Schichten darunter: schneller, günstiger zu warten und leichter zu diagnostizieren. Scrollen Sie durch den Text oder klicken Sie auf eine Schicht des Eisbergs.'
  },
  readoutLabel: 'Aktuelle Schicht:',
  ariaGoTo: 'Gehe zu ',
  quizTitle: 'Welche Schicht würde diesen Fehler erkennen?',
  ariaStage: 'Eisberg der Testschichten',
  ariaBerg: 'Eisberg mit sechs Testschichten, von der Oberfläche bis zu den Unit-Tests am Boden',
  intro: '<h2>Warum ein Eisberg?</h2><p>UI-Tests sind der sichtbare Teil. Sie sind leicht zu demonstrieren und zu verstehen, weil sie das Verhalten einer Person im Produkt abbilden. Aber sie sind nur der kleinste Teil einer guten Strategie.</p><p>Jede Schicht darunter deckt eine andere Art von Fehlern ab. Je tiefer man geht, desto schneller kommt das Feedback: Ein Unit-Test läuft in Millisekunden, ein UI-Test kann Minuten dauern.</p><p>Dieser Artikel durchläuft die sechs Schichten des Eisbergs von oben nach unten mit den typischen Werkzeugen für jede Schicht.</p><p class="note">Die Bewertungen für Geschwindigkeit, Stabilität und Realismus sind allgemeine Referenzen, keine Messungen. Sie variieren stark von Projekt zu Projekt.</p>',
  sections: [
    {
      id: 'ui',
      meters: '1,2,5',
      content: '<p>Sie steuern einen Browser oder eine Mobile-App so wie eine Person: Sie klicken, tippen und warten darauf, dass sich der Bildschirm ändert. Das ist die einzige Schicht, die das gesamte Produkt im Zusammenspiel sieht.</p><ul class="chips"><li>Playwright</li><li>Cypress</li><li>Selenium</li><li>Appium</li></ul><p>Playwright, Cypress und Selenium automatisieren das Web. Appium macht dasselbe für mobile Apps.</p><h3>Wann einsetzen</h3><p>Für wenige kritische End-to-End-Flows wie Login, Suche und Bezahlung. Sie bestätigen, dass die unteren Schichten zusammen eine funktionierende Erfahrung liefern.</p><h3>Worauf achten</h3><p>Sie sind die langsamsten und am stärksten anfällig für intermittierende Fehler („flaky“), weil sie von Netzwerk, Animationen und der gesamten Umgebung abhängen. Wenn Sie Geschäftslogik über die Oberfläche testen, bricht jede visuelle Änderung dutzende Tests.</p><p><strong>Praxisregel:</strong> Wenn Sie es eine Schicht tiefer prüfen können, prüfen Sie es dort.</p>'
    },
    {
      id: 'db',
      meters: '3,4,3',
      content: '<p>Sie prüfen Schema, Migrationen, Abfragen und Regeln, die direkt in der Datenbank liegen, wie Constraints, Trigger und Stored Procedures.</p><ul class="chips"><li>DBUnit</li><li>Flyway</li><li>SQLTest</li></ul><p>DBUnit bereitet Datensätze vor und vergleicht sie. Flyway wendet versionierte Migrationen an; daher deckt die Ausführung gegen eine leere Datenbank in der CI schon viele Fehler auf. SQLTest prüft Routinen und SQL-Abfragen.</p><h3>Wann einsetzen</h3><p>Zum Validieren von Migrationen, kritischen Berichtsabfragen und Datenintegrität: Schlüssel, Eindeutigkeit und Pflichtwerte.</p><h3>Worauf achten</h3><p>Jeder Lauf muss von einem bekannten Zustand starten. Eine zwischen Tests geteilte Datenbank erzeugt unsichtbare Abhängigkeiten: Ein Test besteht nur, weil ein anderer davor ausgeführt wurde.</p>'
    },
    {
      id: 'int',
      meters: '2,3,4',
      content: '<p>Sie prüfen, dass zwei oder mehr reale Teile gut zusammenarbeiten: Ihr Service mit der Datenbank, mit einer Message Queue oder mit einem anderen System.</p><ul class="chips"><li>Pytest</li><li>TestContainers</li><li>WireMock</li></ul><p>TestContainers startet reale Abhängigkeiten wie Datenbanken oder Broker in wegwerfbaren Containern. WireMock simuliert externe APIs inklusive langsamer Antworten und Fehler. Pytest organisiert und startet alles.</p><h3>Wann einsetzen</h3><p>An den Kontaktpunkten zwischen Systemen: Wie reagiert Ihr Code auf einen Timeout eines Drittanbieters, auf eine unerwartete Antwort oder auf eine doppelte Nachricht.</p><h3>Worauf achten</h3><p>Sie sind langsamer als Unit-Tests. Konzentrieren Sie sich auf die Grenzen und wiederholen Sie hier keine Geschäftslogik, die schon tiefer abgedeckt ist.</p>'
    },
    {
      id: 'api',
      meters: '4,4,3',
      content: '<p>Sie rufen Endpoints direkt auf, ohne die Oberfläche zu verwenden. Sie prüfen Statuscodes, Antwortkörper, Verträge, Authentifizierung und Geschäftsregeln, die der Service freigibt.</p><ul class="chips"><li>Postman</li><li>Rest Assured</li><li>Jest</li><li>Pytest + Requests</li></ul><p>Postman eignet sich hervorragend zum Erkunden und zum Aufbau von Collections. Rest Assured (Java), Jest (JavaScript) und Pytest + Requests (Python) erlauben das Schreiben von Tests als Code, gemeinsam mit dem Projekt versioniert.</p><h3>Wann einsetzen</h3><p>Zum Validieren von Verträgen, Berechtigungen und Fehlerfällen: fehlende Felder, ungültige Tokens, nicht vorhandene Ressourcen. Das ist die Schicht mit dem besten Preis-Leistungs-Verhältnis für alle, die die API konsumieren.</p><h3>Worauf achten</h3><p>Ein Vertrag, der ohne Vorwarnung geändert wird, bricht seine Konsumenten. Wenn mehrere Teams dieselbe API nutzen, ziehen Sie Contract Tests in Betracht.</p>'
    },
    {
      id: 'comp',
      meters: '4,4,2',
      content: '<p>Sie testen ein Einzelstück der Oberfläche isoliert. Sie rendern die Komponente, simulieren Klicks und Eingaben und prüfen, was sichtbar wird, ohne die gesamte App oder das echte Backend zu starten.</p><ul class="chips"><li>React Testing Library</li><li>Vue Test Utils</li></ul><p>Beide Bibliotheken fördern das Testen dessen, was der Mensch auf dem Bildschirm wahrnimmt, nicht interner Implementierungsdetails.</p><h3>Wann einsetzen</h3><p>Für Zustände einer Komponente: Laden, Leer, Fehler. Auch für Formularvalidierung und das Verhalten von Buttons und Menüs.</p><h3>Worauf achten</h3><p>Das Testen des internen Zustands einer Komponente macht die Suite fragil: Jede Refaktorierung bricht Tests, selbst wenn das Verhalten unverändert geblieben ist. Bevorzugen Sie sichtbare Ergebnisse.</p>'
    },
    {
      id: 'unit',
      meters: '5,5,1',
      content: '<p>Sie testen das kleinste Stück Code, eine Funktion oder Klasse, isoliert vom Rest. Sie laufen in Millisekunden und zeigen die genaue Zeile an, an der etwas kaputtgegangen ist. Sie sind die Grundlage der gesamten Suite.</p><ul class="chips"><li>Jest</li><li>JUnit</li><li>pytest</li></ul><p>Unit-Tools bieten Geschwindigkeit und Klarheit. Sie erleichtern das Abdecken vieler Berechnungen, Transformationen und einfacher Regeln ohne hohe Kosten.</p><h3>Wann einsetzen</h3><p>Für jede Geschäftsregel, die sich in wenigen Inputs und Outputs ausdrücken lässt. Das ist der beste Ort, um Logik und Grenzfälle zu validieren.</p><h3>Worauf achten</h3><p>Verwechseln Sie Abdeckung nicht mit Vertrauen. Ein schlechter Unit-Test kann das Sicherheitsgefühl erhöhen, während das reale Verhalten des Systems verborgen bleibt.</p>'
    }
  ],
  summary: {
    title: 'Wie man die Suite aufbaut',
    content: '<p>Beginnen Sie mit der Basis und steigen Sie je nach Risiko nach oben. Viele Unit-Tests, gute API- und Integrationsabdeckung an kritischen Punkten und nur wenige UI-Tests für Abläufe, die nicht fehlschlagen dürfen.</p><p>Das Ziel ist nicht, eine Schicht von jedem Typ zu haben. Es geht darum, dass jeder wahrscheinliche Fehler in der billigsten Schicht erkannt wird, die ihn sehen kann.</p>'
  },
  scen: [
    {
      t: 'Eine Funktion, die einen Coupon-Rabatt berechnet, liefert einen negativen Wert zurück, wenn der Coupon größer als die Bestellung ist.',
      a: 'unit',
      why: 'Es ist eine isolierte Rechenregel. Ein Unit-Test mit diesem Grenzfall erkennt den Fehler in Millisekunden und zeigt die genaue Zeile an.'
    },
    {
      t: 'Die Schaltfläche „Bestellung aufgeben” bleibt deaktiviert, obwohl die Person den Fehler im Formular korrigiert hat, aber nur innerhalb des Checkout-Bildschirms.',
      a: 'comp',
      why: 'Das Problem liegt im Verhalten einer Komponente. Wenn man sie isoliert rendert, einen gültigen Wert eingibt und die Schaltfläche prüft, ist die Lösung gefunden, ohne die gesamte App zu starten.'
    },
    {
      t: 'Die API gibt 200 zurück, omits aber das Feld „status”, das die Mobile-App erwartet.',
      a: 'api',
      why: 'Es ist ein Antwort-Vertragsproblem. Ein API-Test, der den Antwortkörper validiert, erkennt das fehlende Feld direkt am Endpunkt.'
    },
    {
      t: 'Eine Migration hat eine Spalte umbenannt, und die monatliche Berichtsanfrage ist in Produktion kaputtgegangen.',
      a: 'db',
      why: 'Wenn man die Migrationen gegen eine leere Datenbank ausführt und die kritischen Abfragen in der Continuous Integration prüft, würde die fehlende Spalte vor dem Deployment auffallen.'
    },
    {
      t: 'Der Zahlungsdienst eines Drittanbieters antwortet jetzt langsam und unser System behandelt den Timeout nicht richtig.',
      a: 'int',
      why: 'Es ist ein Kontaktpunkt zwischen Systemen. Mit WireMock simulieren Sie die langsame Antwort und prüfen, wie Ihr Service reagiert.'
    },
    {
      t: 'Der komplette Ablauf von Login, Warenkorb und Zahlung muss im Safari auf dem iPhone funktionieren.',
      a: 'ui',
      why: 'Nur ein End-to-End-Test in einem echten Browser sieht die komplette Erfahrung. Halten Sie diese wenigen für kritische Abläufe.'
    }
  ]
};
