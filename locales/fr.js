window.IcebergLocales = window.IcebergLocales || {};
window.IcebergLocales.fr = {
  names: {
    ui: 'Tests d’UI',
    db: 'Tests de base de données',
    int: 'Tests d’intégration',
    api: 'Tests d’API',
    comp: 'Tests de composants',
    unit: 'Tests unitaires'
  },
  depth: {
    ui: 'surface',
    db: '10 m',
    int: '20 m',
    api: '30 m',
    comp: '40 m',
    unit: '50 m'
  },
  labels: ['Rapidité', 'Stabilité', 'Réalisme'],
  meterNote: 'Réalisme : à quel point le test se rapproche de ce que vit réellement l’utilisateur.',
  ofFive: '{v} sur 5',
  surface: 'surface',
  prog: 'Scénario {n} sur {t}',
  result: 'Résultat',
  score: '{s} sur {t}',
  high: 'Vous pensez déjà comme quelqu’un qui construit la suite de bas en haut.',
  mid: 'Bon début. Relisez les couches sur lesquelles vous vous êtes trompé.',
  low: 'Cela vaut la peine de reparcourir l’iceberg, tranquillement, de haut en bas.',
  again: 'Réessayer',
  next: 'Scénario suivant',
  finish: 'Voir le résultat',
  correct: 'Exactement. ',
  wrong: 'La couche la moins chère pour détecter ce bug est {name}. ',
  hero: {
    title: 'Ce qui se cache sous la surface de l’automatisation des tests',
    lede: 'L’essentiel de la valeur des tests automatisés ne se trouve pas dans l’écran que voit l’utilisateur. Il se trouve dans les couches du dessous : plus rapides, moins coûteuses à maintenir et plus faciles à diagnostiquer. Faites défiler le texte ou cliquez sur une couche de l’iceberg.'
  },
  readoutLabel: 'Couche actuelle :',
  ariaGoTo: 'Aller à ',
  quizTitle: 'Quelle couche détecterait ce bug ?',
  ariaStage: 'Iceberg des couches de tests',
  ariaBerg: 'Iceberg à six couches de tests, de l’interface à la pointe jusqu’aux tests unitaires au fond',
  intro: '<h2>Pourquoi un iceberg ?</h2><p>Les tests d’interface sont la partie visible. Ils sont faciles à démontrer et à comprendre, car ils reproduisent ce qu’une personne ferait dans le produit. Mais ils ne représentent que la plus petite part d’une bonne stratégie.</p><p>Chaque couche du dessous couvre un type de défaillance différent. Et plus on descend, plus le retour est rapide : un test unitaire s’exécute en quelques millisecondes, un test d’UI peut prendre des minutes.</p><p>Cet article parcourt les six couches de l’iceberg, de haut en bas, avec les outils typiques de chacune.</p><p class="note">Les notes de rapidité, de stabilité et de réalisme sont une référence générale, pas des mesures. Elles varient beaucoup d’un projet à l’autre.</p>',
  sections: [
    {
      id: 'ui',
      meters: '1,2,5',
      content: '<p>Ils pilotent un navigateur ou une application mobile comme le ferait une personne : ils cliquent, saisissent du texte et attendent que l’écran change. C’est la seule couche qui voit le produit entier fonctionner d’un seul bloc.</p><ul class="chips"><li>Playwright</li><li>Cypress</li><li>Selenium</li><li>Appium</li></ul><p>Playwright, Cypress et Selenium automatisent le web. Appium fait de même pour les applications mobiles.</p><h3>Quand l’utiliser</h3><p>Pour quelques parcours critiques de bout en bout, comme la connexion, la recherche et le paiement. Ils confirment que les couches du dessous, une fois réunies, offrent une expérience qui fonctionne.</p><h3>Points de vigilance</h3><p>Ce sont les plus lents et les plus sujets aux échecs intermittents (les tests « flaky »), car ils dépendent du réseau, des animations et de tout l’environnement. Si vous testez des règles métier par l’écran, chaque changement visuel casse des dizaines de tests.</p><p><strong>Règle pratique :</strong> si vous pouvez le vérifier une couche plus bas, vérifiez-le là.</p>'
    },
    {
      id: 'db',
      meters: '3,4,3',
      content: '<p>Ils vérifient le schéma, les migrations, les requêtes et les règles qui vivent dans la base elle-même, comme les contraintes, les triggers et les procédures stockées.</p><ul class="chips"><li>DBUnit</li><li>Flyway</li><li>SQLTest</li></ul><p>DBUnit prépare et compare des jeux de données. Flyway applique des migrations versionnées, de sorte que leur exécution sur une base vide dans l’intégration continue révèle déjà de nombreux problèmes. SQLTest couvre les routines et requêtes SQL.</p><h3>Quand l’utiliser</h3><p>Pour valider les migrations, les requêtes critiques et l’intégrité des données : clés, unicité et valeurs obligatoires.</p><h3>Points de vigilance</h3><p>Chaque exécution doit partir d’un état connu. Une base de données partagée entre tests crée des dépendances invisibles : un test passe seulement parce qu’un autre a été exécuté avant.</p>'
    },
    {
      id: 'int',
      meters: '2,3,4',
      content: '<p>Ils vérifient que deux ou plusieurs parties réelles fonctionnent bien ensemble : votre service avec la base, avec une file de messages ou avec un autre système.</p><ul class="chips"><li>Pytest</li><li>TestContainers</li><li>WireMock</li></ul><p>TestContainers démarre des dépendances réelles, comme des bases de données ou des brokers, dans des conteneurs jetables. WireMock simule des API externes, y compris des réponses lentes et des erreurs. Pytest organise et exécute tout.</p><h3>Quand l’utiliser</h3><p>Aux points de contact entre systèmes : comment votre code réagit à un timeout d’un service tiers, à une réponse inattendue ou à un message dupliqué.</p><h3>Points de vigilance</h3><p>Ils sont plus lents que les tests unitaires. Concentrez-vous sur les frontières et ne répétez pas ici la logique métier déjà couverte en dessous.</p>'
    },
    {
      id: 'api',
      meters: '4,4,3',
      content: '<p>Ils appellent les endpoints directement, sans passer par l’écran. Ils vérifient les codes de statut, les corps de réponse, les contrats, l’authentification et les règles métier que le service expose.</p><ul class="chips"><li>Postman</li><li>Rest Assured</li><li>Jest</li><li>Pytest + Requests</li></ul><p>Postman est excellent pour explorer et construire des collections. Rest Assured (Java), Jest (JavaScript) et Pytest + Requests (Python) vous permettent d’écrire les tests en code, versionnés avec le projet.</p><h3>Quand l’utiliser</h3><p>Pour valider les contrats, les permissions et les cas d’erreur : champs manquants, tokens invalides, ressources inexistantes. C’est la couche avec le meilleur rapport coût/confiance pour quiconque consomme l’API.</p><h3>Points de vigilance</h3><p>Un contrat qui change sans avertissement casse ses consommateurs. Si plusieurs équipes dépendent de la même API, pensez à ajouter des tests de contrat.</p>'
    },
    {
      id: 'comp',
      meters: '4,4,2',
      content: '<p>Ils testent un élément de l’interface isolé. Ils rendent le composant, simulent des clics et des saisies et vérifient ce qui s’affiche, sans lancer toute l’application ni le backend réel.</p><ul class="chips"><li>React Testing Library</li><li>Vue Test Utils</li></ul><p>Les deux bibliothèques encouragent à tester ce que la personne perçoit à l’écran, pas les détails internes d’implémentation.</p><h3>Quand l’utiliser</h3><p>Pour les états d’un composant : chargement, vide, erreur. Aussi pour la validation de formulaires et le comportement des boutons et menus.</p><h3>Points de vigilance</h3><p>Tester l’état interne d’un composant rend la suite fragile : toute refonte casse des tests même lorsque le comportement n’a pas changé. Préférez vérifier le résultat visible.</p>'
    },
    {
      id: 'unit',
      meters: '5,5,1',
      content: '<p>Ils testent la plus petite pièce de code, une fonction ou une classe, isolée du reste. Ils s’exécutent en millisecondes et pointent la ligne exacte où quelque chose a cassé. Ils sont la base de toute la suite.</p><ul class="chips"><li>Jest</li><li>JUnit</li><li>pytest</li></ul><p>Les outils d’unité offrent vitesse et clarté. Ils permettent de couvrir beaucoup de règles de calcul, transformations et comportements simples sans coût élevé.</p><h3>Quand l’utiliser</h3><p>Pour toute règle de métier qui peut s’exprimer en quelques entrées et sorties. C’est le meilleur endroit pour valider la logique et les cas limites.</p><h3>Points de vigilance</h3><p>Ne confondez pas couverture et confiance. Un mauvais test unitaire peut gonfler la sensation de sécurité tout en cachant le vrai comportement du système.</p>'
    }
  ],
  summary: {
    title: 'Comment construire la suite',
    content: '<p>Commencez par la base et montez selon le risque. Beaucoup de tests unitaires, une bonne couverture API et intégration sur les points critiques, et quelques tests d’UI pour les flux qui ne peuvent pas tomber en panne.</p><p>L’objectif n’est pas d’avoir une couche de chaque type. Il s’agit de faire en sorte que chaque défaillance probable soit détectée dans la couche la moins chère capable de la voir.</p>'
  },
  scen: [
    {
      t: 'Une fonction qui calcule la remise d’un coupon renvoie une valeur négative quand le coupon est plus grand que la commande.',
      a: 'unit',
      why: 'C’est une règle de calcul isolée. Un test unitaire avec ce cas limite détecte l’erreur en quelques millisecondes et montre la ligne exacte.'
    },
    {
      t: 'Le bouton “Finaliser la commande” reste désactivé après que la personne corrige l’erreur dans le formulaire, mais uniquement dans l’écran de caisse.',
      a: 'comp',
      why: 'Le problème est dans le comportement d’un composant. Le rendre isolé, saisir une valeur valide et vérifier le bouton le résout, sans lancer toute l’application.'
    },
    {
      t: 'L’API renvoie 200 mais omet le champ “status” que l’application mobile attend.',
      a: 'api',
      why: 'C’est un problème de contrat de réponse. Un test d’API qui valide le corps de la réponse détecte le champ manquant directement au niveau de l’endpoint.'
    },
    {
      t: 'Une migration a renommé une colonne et la requête du rapport mensuel a cassé en production.',
      a: 'db',
      why: 'Exécuter les migrations sur une base vide et lancer les requêtes critiques dans l’intégration continue aurait révélé la colonne manquante avant le déploiement.'
    },
    {
      t: 'Le service de paiement tiers a commencé à répondre lentement et notre système ne gère pas le timeout.',
      a: 'int',
      why: 'C’est un point de contact entre systèmes. Avec WireMock, vous simulez la réponse lente et vérifiez comment votre service réagit.'
    },
    {
      t: 'Le flux complet de connexion, panier et paiement doit fonctionner dans Safari sur iPhone.',
      a: 'ui',
      why: 'Seul un test de bout en bout dans un navigateur réel voit l’expérience complète. Gardez-en peu, pour les flux critiques.'
    }
  ]
};
