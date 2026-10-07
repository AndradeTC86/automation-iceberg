window.IcebergLocales = window.IcebergLocales || {};
window.IcebergLocales.en = {
  names: {
    ui: 'UI tests',
    db: 'Database tests',
    int: 'Integration tests',
    api: 'API tests',
    comp: 'Component tests',
    unit: 'Unit tests'
  },
  depth: {
    ui: 'surface',
    db: '10 m',
    int: '20 m',
    api: '30 m',
    comp: '40 m',
    unit: '50 m'
  },
  labels: ['Speed', 'Stability', 'Realism'],
  meterNote: 'Realism: how close the test is to what the user actually experiences.',
  ofFive: '{v} of 5',
  surface: 'surface',
  prog: 'Scenario {n} of {t}',
  result: 'Result',
  score: '{s} of {t}',
  high: 'You already think like someone who builds the suite from the bottom up.',
  mid: 'Good start. Reread the layers you missed.',
  low: 'Worth walking through the iceberg again, slowly, from top to bottom.',
  again: 'Try again',
  next: 'Next scenario',
  finish: 'See result',
  correct: 'Exactly. ',
  wrong: 'The cheapest layer to catch this bug is {name}. ',
  hero: {
    title: 'What lies beneath the surface of test automation',
    lede: 'Most of the value in automated tests is not on the screen the user sees. It lives in the layers below it: faster to run, cheaper to maintain and easier to diagnose. Scroll the text or click a layer of the iceberg.'
  },
  readoutLabel: 'Current layer:',
  ariaGoTo: 'Go to ',
  quizTitle: 'Which layer would catch this bug?',
  ariaStage: 'Iceberg of test layers',
  ariaBerg: 'Iceberg with six layers of tests, from the interface at the top to unit tests at the bottom',
  intro: '<h2>Why an iceberg?</h2><p>UI tests are the visible part. They are easy to demo and easy to understand, because they repeat what a person would do in the product. But they are the smallest slice of a good strategy.</p><p>Each layer below covers a different kind of failure. And the deeper you go, the faster the feedback: a unit test runs in milliseconds, a UI test can take minutes.</p><p>This article walks through the six layers of the iceberg, from top to bottom, with the typical tools for each.</p><p class="note">The speed, stability and realism ratings are a general reference, not measurements. They vary a lot from project to project.</p>',
  sections: [
    {
      id: 'ui',
      meters: '1,2,5',
      content: '<p>They drive a browser or a mobile app the way a person would: they click, type and wait for the screen to change. This is the only layer that sees the whole product working together.</p><ul class="chips"><li>Playwright</li><li>Cypress</li><li>Selenium</li><li>Appium</li></ul><p>Playwright, Cypress and Selenium automate the web. Appium does the same for mobile apps.</p><h3>When to use it</h3><p>For a few critical end-to-end flows, such as login, search and checkout. They confirm that the layers below, added together, deliver an experience that works.</p><h3>What to watch for</h3><p>They are the slowest and the most prone to intermittent failures (“flaky” tests), because they depend on the network, animations and the whole environment. If you test business rules through the screen, every visual change breaks dozens of tests.</p><p><strong>Rule of thumb:</strong> if you can verify it one layer down, verify it there.</p>'
    },
    {
      id: 'db',
      meters: '3,4,3',
      content: '<p>They check the schema, migrations, queries and the rules that live in the database itself, such as constraints, triggers and stored procedures.</p><ul class="chips"><li>DBUnit</li><li>Flyway</li><li>SQLTest</li></ul><p>DBUnit sets up and compares datasets. Flyway applies versioned migrations, so running them against an empty database in continuous integration already reveals many errors. SQLTest covers routines and queries written in SQL.</p><h3>When to use it</h3><p>To validate migrations, critical reporting queries and data integrity: keys, uniqueness and required values.</p><h3>What to watch for</h3><p>Every run must start from a known state. A database shared between tests creates invisible dependencies: one test passes only because another ran before it.</p>'
    },
    {
      id: 'int',
      meters: '2,3,4',
      content: '<p>They check that two or more real parts work well together: your service with the database, with a message queue or with another service.</p><ul class="chips"><li>Pytest</li><li>TestContainers</li><li>WireMock</li></ul><p>TestContainers starts real dependencies, such as databases and brokers, in disposable containers. WireMock simulates external APIs, including slow responses and errors. Pytest organizes and runs everything.</p><h3>When to use it</h3><p>For the points of contact between systems: how your code reacts to a timeout from a third-party service, an unexpected response or a duplicated message.</p><h3>What to watch for</h3><p>They are slower than unit tests. Concentrate them on the boundaries and don’t repeat here the business logic that is already covered below.</p>'
    },
    {
      id: 'api',
      meters: '4,4,3',
      content: '<p>They call the endpoints directly, without going through the screen. They check status codes, response bodies, contracts, authentication and the business rules the service exposes.</p><ul class="chips"><li>Postman</li><li>Rest Assured</li><li>Jest</li><li>Pytest + Requests</li></ul><p>Postman is great for exploring and building collections. Rest Assured (Java), Jest (JavaScript) and Pytest + Requests (Python) let you write the tests as code, versioned alongside the project.</p><h3>When to use it</h3><p>To validate contracts, permissions and error cases: missing fields, invalid tokens, nonexistent resources. It is the layer with the best ratio of cost to confidence for anyone who consumes the API.</p><h3>What to watch for</h3><p>A contract that changes without notice breaks its consumers. If several teams depend on the same API, consider adding contract tests.</p>'
    },
    {
      id: 'comp',
      meters: '4,4,2',
      content: '<p>They test one piece of the interface in isolation. They render the component, simulate clicks and typing and check what appears, without starting the whole app or the real backend.</p><ul class="chips"><li>React Testing Library</li><li>Vue Test Utils</li></ul><p>Both libraries encourage testing what the person perceives on screen, not internal implementation details.</p><h3>When to use it</h3><p>For a component’s states: loading, empty, error. Also for form validation and the behavior of buttons and menus.</p><h3>What to watch for</h3><p>Testing a component’s internal state makes the suite brittle: any refactor breaks tests even when the behavior hasn’t changed. Prefer checking the visible result.</p>'
    },
    {
      id: 'unit',
      meters: '5,5,1',
      content: '<p>They test the smallest piece of code, a function or a class, isolated from everything else. They run in milliseconds and point to the exact line where something broke. They are the foundation of the whole suite.</p><ul class="chips"><li>Jest</li><li>JUnit</li><li>pytest</li></ul><p>Unit tools offer speed and clarity. They make it easy to cover lots of calculations, transformations and simple rules without a high cost.</p><h3>When to use it</h3><p>For any rule of business that can be expressed in a few inputs and outputs. This is the best place to validate logic and edge cases.</p><h3>What to watch for</h3><p>Do not confuse coverage with confidence. A poor unit test can inflate the sense of safety while hiding real system behavior.</p>'
    }
  ],
  summary: {
    title: 'How to build the suite',
    content: '<p>Start from the base and move upward according to risk. Many unit tests, good API and integration coverage at the critical points, and a few UI tests for the flows that cannot fail.</p><p>The goal is not to have one layer of each type. It is to ensure each likely failure is detected in the cheapest layer capable of seeing it.</p>'
  },
  scen: [
    {
      t: 'A function that calculates a coupon discount returns a negative value when the coupon is larger than the order.',
      a: 'unit',
      why: 'It\'s an isolated calculation rule. A unit test with this edge case catches the error in milliseconds and shows the exact line.'
    },
    {
      t: 'The “Place order” button stays disabled after the person fixes the error in the form, but only inside the checkout screen.',
      a: 'comp',
      why: 'The problem is in a component\'s behavior. Rendering it in isolation, typing a valid value and checking the button solves it, without starting the whole app.'
    },
    {
      t: 'The API returns 200 but omits the “status” field that the mobile app expects.',
      a: 'api',
      why: 'It is a response contract issue. An API test that validates the response body detects the missing field right at the endpoint.'
    },
    {
      t: 'A migration renamed a column and the monthly report query broke in production.',
      a: 'db',
      why: 'Running the migrations against an empty database and executing the critical queries in continuous integration would reveal the missing column before the deploy.'
    },
    {
      t: 'The third-party payment service started responding slowly and our system doesn\'t handle the timeout.',
      a: 'int',
      why: 'It is a point of contact between systems. With WireMock you simulate the slow response and check how your service reacts.'
    },
    {
      t: 'The complete flow of login, cart and payment must work in Safari on iPhone.',
      a: 'ui',
      why: 'Only an end-to-end test in a real browser sees the full experience. Keep these few, for critical flows.'
    }
  ]
};
