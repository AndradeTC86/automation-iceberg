window.IcebergLocales = window.IcebergLocales || {};
window.IcebergLocales.es = {
  names: {
    ui: 'Pruebas de UI',
    db: 'Pruebas de base de datos',
    int: 'Pruebas de integración',
    api: 'Pruebas de API',
    comp: 'Pruebas de componentes',
    unit: 'Pruebas unitarias'
  },
  depth: {
    ui: 'superficie',
    db: '10 m',
    int: '20 m',
    api: '30 m',
    comp: '40 m',
    unit: '50 m'
  },
  labels: ['Velocidad', 'Estabilidad', 'Realismo'],
  meterNote: 'Realismo: qué tan cerca está la prueba de lo que el usuario realmente vive.',
  ofFive: '{v} de 5',
  surface: 'superficie',
  prog: 'Escenario {n} de {t}',
  result: 'Resultado',
  score: '{s} de {t}',
  high: 'Ya piensas como quien arma la suite de abajo hacia arriba.',
  mid: 'Buen camino. Vuelve a leer las capas en las que fallaste.',
  low: 'Vale la pena recorrer el iceberg de nuevo, con calma, de arriba abajo.',
  again: 'Intentar de nuevo',
  next: 'Siguiente escenario',
  finish: 'Ver resultado',
  correct: 'Exacto. ',
  wrong: 'La capa más barata para detectar este bug es {name}. ',
  hero: {
    title: 'Qué queda bajo la superficie en la automatización de pruebas',
    lede: 'La mayor parte del valor de las pruebas automatizadas no está en la pantalla que ve el usuario. Está en las capas de abajo: son más rápidas, más económicas de mantener y más fáciles de diagnosticar. Desplaza el texto o haz clic en una capa del iceberg.'
  },
  readoutLabel: 'Capa actual:',
  ariaGoTo: 'Ir a ',
  quizTitle: '¿Qué capa atraparía este error?',
  ariaStage: 'Iceberg de capas de prueba',
  ariaBerg: 'Iceberg con seis capas de pruebas, desde la interfaz en la punta hasta las pruebas unitarias en el fondo',
  intro: '<h2>¿Por qué un iceberg?</h2><p>Las pruebas de interfaz son la parte visible. Son fáciles de demostrar y entender, porque repiten lo que una persona haría en el producto. Pero son la porción más pequeña de una buena estrategia.</p><p>Cada capa de abajo cubre un tipo diferente de fallo. Y cuanto más profundo, más rápido es el feedback: una prueba unitaria corre en milisegundos, una prueba de UI puede tardar minutos.</p><p>Este artículo recorre las seis capas del iceberg, de arriba a abajo, con las herramientas típicas de cada una.</p><p class="note">Las notas de velocidad, estabilidad y realismo son una referencia general, no mediciones. Varían bastante según el proyecto.</p>',
  sections: [
    {
      id: 'ui',
      meters: '1,2,5',
      content: '<p>Controlan un navegador o una app móvil como lo haría una persona: clican, escriben y esperan a que la pantalla cambie. Es la única capa que ve el producto completo funcionando en conjunto.</p><ul class="chips"><li>Playwright</li><li>Cypress</li><li>Selenium</li><li>Appium</li></ul><p>Playwright, Cypress y Selenium automatizan la web. Appium hace lo mismo para apps móviles.</p><h3>Cuándo usarlo</h3><p>Para pocos flujos críticos de extremo a extremo, como login, búsqueda y pago. Confirman que las capas inferiores, sumadas, entregan una experiencia que funciona.</p><h3>Qué cuidar</h3><p>Son las más lentas y las más propensas a fallos intermitentes (“flaky”), porque dependen de la red, animaciones y el entorno completo. Si pruebas la regla de negocio a través de la pantalla, cada cambio visual rompe decenas de pruebas.</p><p><strong>Regla práctica:</strong> si puedes comprobarlo en una capa de abajo, compruébalo allí.</p>'
    },
    {
      id: 'db',
      meters: '3,4,3',
      content: '<p>Verifican el esquema, migraciones, consultas y reglas que viven en la base misma, como constraints, triggers y procedimientos.</p><ul class="chips"><li>DBUnit</li><li>Flyway</li><li>SQLTest</li></ul><p>DBUnit prepara y compara datasets. Flyway aplica migraciones versionadas, así que ejecutarlas contra una base vacía en integración continua ya revela muchos errores. SQLTest cubre rutinas y consultas SQL.</p><h3>Cuándo usarlo</h3><p>Para validar migraciones, consultas críticas e integridad de datos: claves, unicidad y valores obligatorios.</p><h3>Qué cuidar</h3><p>Cada ejecución debe empezar desde un estado conocido. Una base compartida entre pruebas crea dependencias invisibles: una prueba pasa solo porque otra ejecutó antes.</p>'
    },
    {
      id: 'int',
      meters: '2,3,4',
      content: '<p>Comprueban que dos o más piezas reales funcionen bien juntas: tu servicio con la base de datos, con una cola o con otro sistema.</p><ul class="chips"><li>Pytest</li><li>TestContainers</li><li>WireMock</li></ul><p>TestContainers inicia dependencias reales, como bases y brokers, en contenedores descartables. WireMock simula APIs externas, incluyendo respuestas lentas y errores. Pytest organiza y ejecuta todo.</p><h3>Cuándo usarlo</h3><p>En los puntos de contacto entre sistemas: cómo responde tu código a un timeout de un servicio de terceros, a una respuesta inesperada o a un mensaje duplicado.</p><h3>Qué cuidar</h3><p>Son más lentas que las pruebas unitarias. Concéntrate en los límites y no repitas aquí la lógica de negocio ya cubierta debajo.</p>'
    },
    {
      id: 'api',
      meters: '4,4,3',
      content: '<p>Llaman a los endpoints directamente, sin pasar por la pantalla. Verifican códigos de estado, cuerpos de respuesta, contratos, autenticación y reglas de negocio que expone el servicio.</p><ul class="chips"><li>Postman</li><li>Rest Assured</li><li>Jest</li><li>Pytest + Requests</li></ul><p>Postman es excelente para explorar y construir colecciones. Rest Assured (Java), Jest (JavaScript) y Pytest + Requests (Python) te permiten escribir las pruebas como código, versionadas junto con el proyecto.</p><h3>Cuándo usarlo</h3><p>Para validar contratos, permisos y casos de error: campos faltantes, tokens inválidos, recursos inexistentes. Es la capa con mejor relación costo/confianza para quien consume la API.</p><h3>Qué cuidar</h3><p>Un contrato que cambia sin aviso rompe a sus consumidores. Si varios equipos dependen de la misma API, considera añadir pruebas de contrato.</p>'
    },
    {
      id: 'comp',
      meters: '4,4,2',
      content: '<p>Prueban una pieza de la interfaz en aislamiento. Renderizan el componente, simulan clics y escritura y comprueban qué aparece, sin arrancar toda la app ni el backend real.</p><ul class="chips"><li>React Testing Library</li><li>Vue Test Utils</li></ul><p>Las dos bibliotecas animan a probar lo que la persona percibe en pantalla, no detalles internos de implementación.</p><h3>Cuándo usarlo</h3><p>Para los estados de un componente: cargando, vacío, error. También para validación de formularios y comportamiento de botones y menús.</p><h3>Qué cuidar</h3><p>Probar el estado interno del componente vuelve a la suite frágil: cualquier refactor rompe pruebas incluso cuando el comportamiento no ha cambiado. Prefiere comprobar el resultado visible.</p>'
    },
    {
      id: 'unit',
      meters: '5,5,1',
      content: '<p>Prueban la pieza más pequeña de código, una función o una clase, aislada del resto. Corren en milisegundos y apuntan a la línea exacta en que algo se rompió. Son la base de toda la suite.</p><ul class="chips"><li>Jest</li><li>JUnit</li><li>pytest</li></ul><p>Las herramientas de unidad ofrecen velocidad y claridad. Permiten cubrir muchas reglas de cálculo, transformaciones y comportamientos simples sin un alto costo.</p><h3>Cuándo usarlo</h3><p>Para cualquier regla de negocio que pueda expresarse en pocos inputs y outputs. Es el mejor sitio para validar lógica y casos límite.</p><h3>Qué cuidar</h3><p>No confundas cobertura con confianza. Una prueba unitaria mala puede aumentar la sensación de seguridad mientras oculta el comportamiento real del sistema.</p>'
    }
  ],
  summary: {
    title: 'Cómo armar la suite',
    content: '<p>Empieza por la base y sube según el riesgo. Muchas pruebas unitarias, buena cobertura de API e integración en los puntos críticos, y pocas pruebas de UI para los flujos que no pueden fallar.</p><p>El objetivo no es tener una capa de cada tipo. Es que cada fallo probable se detecte en la capa más barata capaz de verlo.</p>'
  },
  scen: [
    {
      t: 'Una función que calcula el descuento de un cupón devuelve un valor negativo cuando el cupón es mayor que el pedido.',
      a: 'unit',
      why: 'Es una regla de cálculo aislada. Una prueba unitaria con este caso límite detecta el error en milisegundos y muestra la línea exacta.'
    },
    {
      t: 'El botón “Finalizar compra” sigue deshabilitado después de que la persona corrige el error del formulario, pero solo dentro de la pantalla de pago.',
      a: 'comp',
      why: 'El problema está en el comportamiento de un componente. Renderizarlo de forma aislada, escribir un valor válido y comprobar el botón lo resuelve, sin levantar la app completa.'
    },
    {
      t: 'La API responde 200, pero omite el campo “status” que espera la aplicación móvil.',
      a: 'api',
      why: 'Es un problema del contrato de respuesta. Una prueba de API que valide el cuerpo de la respuesta detecta el campo ausente directamente en el endpoint.'
    },
    {
      t: 'Una migración renombró una columna y la consulta del informe mensual falló en producción.',
      a: 'db',
      why: 'Ejecutar las migraciones sobre una base vacía y correr las consultas críticas en la integración continua habría revelado la columna faltante antes del despliegue.'
    },
    {
      t: 'El servicio de pagos de un tercero empezó a tardar y nuestro sistema no maneja el timeout.',
      a: 'int',
      why: 'Es un punto de contacto entre sistemas. Con WireMock simulas la respuesta lenta y compruebas cómo reacciona tu servicio.'
    },
    {
      t: 'El flujo completo de inicio de sesión, carrito y pago tiene que funcionar en Safari del iPhone.',
      a: 'ui',
      why: 'Solo una prueba de extremo a extremo en un navegador real ve la experiencia completa. Mantén pocas, para los flujos críticos.'
    }
  ]
};
