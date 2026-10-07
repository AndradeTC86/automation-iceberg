window.IcebergLocales = window.IcebergLocales || {};
window.IcebergLocales['pt-BR'] = {
  names: {
    ui: 'Testes de UI',
    db: 'Testes de banco de dados',
    int: 'Testes de integração',
    api: 'Testes de API',
    comp: 'Testes de componente',
    unit: 'Testes unitários'
  },
  depth: {
    ui: 'superfície',
    db: '10 m',
    int: '20 m',
    api: '30 m',
    comp: '40 m',
    unit: '50 m'
  },
  labels: ['Velocidade', 'Estabilidade', 'Realismo'],
  meterNote: 'Realismo: quão perto do que o usuário realmente vive.',
  ofFive: '{v} de 5',
  surface: 'superfície',
  prog: 'Cenário {n} de {t}',
  result: 'Resultado',
  score: '{s} de {t}',
  high: 'Você já pensa como quem monta a suíte de baixo para cima.',
  mid: 'Bom caminho. Releia as camadas em que errou.',
  low: 'Vale percorrer o iceberg de novo, com calma, de cima para baixo.',
  again: 'Tentar de novo',
  next: 'Próximo cenário',
  finish: 'Ver resultado',
  correct: 'Isso mesmo. ',
  wrong: 'A camada mais barata para pegar este bug é {name}. ',
  hero: {
    title: 'O que fica debaixo d’água na automação de testes',
    lede: 'A maior parte do valor dos testes automatizados não está na tela que o usuário vê. Está nas camadas abaixo dela: mais rápidas, mais baratas de manter e mais fáceis de diagnosticar. Role o texto ou clique em uma camada do iceberg.'
  },
  readoutLabel: 'Camada atual:',
  ariaGoTo: 'Ir para ',
  quizTitle: 'Qual camada pegaria este bug?',
  ariaStage: 'Iceberg das camadas de teste',
  ariaBerg: 'Iceberg com seis camadas de testes, da interface na ponta até os testes unitários no fundo',
  intro: '<h2>Por que um iceberg?</h2><p>Testes de interface são a parte visível. Eles são fáceis de demonstrar e de entender, porque repetem o que uma pessoa faria no produto. Mas são a menor fatia de uma boa estratégia.</p><p>Cada camada abaixo cobre um tipo diferente de falha. E, quanto mais fundo, mais rápido o feedback: um teste unitário roda em milissegundos, um teste de UI pode levar minutos.</p><p>Este artigo percorre as seis camadas do iceberg, de cima para baixo, com as ferramentas típicas de cada uma.</p><p class="note">As notas de velocidade, estabilidade e realismo são uma referência geral, não medições. Elas variam bastante de projeto para projeto.</p>',
  sections: [
    {
      id: 'ui',
      meters: '1,2,5',
      content: '<p>Controlam um navegador ou um app móvel como uma pessoa faria: clicam, digitam e esperam a tela mudar. São a única camada que enxerga o produto inteiro funcionando junto.</p><ul class="chips"><li>Playwright</li><li>Cypress</li><li>Selenium</li><li>Appium</li></ul><p>Playwright, Cypress e Selenium automatizam a web. Appium faz o mesmo para aplicativos móveis.</p><h3>Quando usar</h3><p>Para poucos fluxos críticos de ponta a ponta, como login, busca e pagamento. Eles confirmam que as camadas de baixo, somadas, entregam uma experiência que funciona.</p><h3>O que cuidar</h3><p>São os mais lentos e os mais sujeitos a falhas intermitentes (os testes “flaky”), porque dependem de rede, animações e do ambiente inteiro. Se você testa regra de negócio pela tela, cada mudança visual quebra dezenas de testes.</p><p><strong>Regra prática:</strong> se dá para verificar em uma camada abaixo, verifique lá.</p>'
    },
    {
      id: 'db',
      meters: '3,4,3',
      content: '<p>Verificam o esquema, as migrations, as consultas e as regras que vivem no próprio banco, como constraints, triggers e procedures.</p><ul class="chips"><li>DBUnit</li><li>Flyway</li><li>SQLTest</li></ul><p>DBUnit prepara e compara datasets. Flyway aplica migrações versionadas, então rodá-las em um banco vazio na integração contínua já revela muitos erros. SQLTest cobre rotinas e consultas em SQL.</p><h3>Quando usar</h3><p>Para validar migrations, consultas críticas e integridade de dados: chaves, unicidade e valores obrigatórios.</p><h3>O que cuidar</h3><p>Cada execução precisa começar de um estado conhecido. Um banco compartilhado entre testes cria dependências invisíveis: um teste passa só porque outro rodou antes.</p>'
    },
    {
      id: 'int',
      meters: '2,3,4',
      content: '<p>Validam que duas ou mais partes reais funcionam bem em conjunto: seu serviço com o banco, com fila ou com outro sistema.</p><ul class="chips"><li>Pytest</li><li>TestContainers</li><li>WireMock</li></ul><p>TestContainers inicia dependências reais, como bancos e brokers, em containers descartáveis. WireMock simula APIs externas, inclusive respostas lentas e erros. Pytest organiza e executa tudo.</p><h3>Quando usar</h3><p>Nos pontos de contato entre sistemas: como seu código reage a um timeout de um serviço de terceiros, a uma resposta inesperada ou a uma mensagem duplicada.</p><h3>O que cuidar</h3><p>São mais lentos do que testes unitários. Concentre-se nas fronteiras e não repita aqui a lógica de negócio já coberta abaixo.</p>'
    },
    {
      id: 'api',
      meters: '4,4,3',
      content: '<p>Chamam os endpoints diretamente, sem passar pela tela. Verificam códigos de status, corpos de resposta, contratos, autenticação e as regras de negócio que o serviço expõe.</p><ul class="chips"><li>Postman</li><li>Rest Assured</li><li>Jest</li><li>Pytest + Requests</li></ul><p>Postman é ótimo para explorar e montar coleções. Rest Assured (Java), Jest (JavaScript) e Pytest + Requests (Python) permitem escrever os testes como código, versionados junto com o projeto.</p><h3>Quando usar</h3><p>Para validar contratos, permissões e casos de erro: campos ausentes, tokens inválidos, recursos inexistentes. É a camada com melhor relação custo/certeza para quem consome a API.</p><h3>O que cuidar</h3><p>Um contrato que muda sem aviso quebra seus consumidores. Se várias equipes dependem da mesma API, vale adicionar testes de contrato.</p>'
    },
    {
      id: 'comp',
      meters: '4,4,2',
      content: '<p>Testam uma peça da interface isoladamente. Renderizam o componente, simulam cliques e digitação e verificam o que aparece, sem subir a app inteira ou o backend real.</p><ul class="chips"><li>React Testing Library</li><li>Vue Test Utils</li></ul><p>As duas bibliotecas incentivam a testar o que a pessoa percebe na tela, não detalhes internos de implementação.</p><h3>Quando usar</h3><p>Para os estados de um componente: carregando, vazio, erro. Também para validação de formulários e o comportamento de botões e menus.</p><h3>O que cuidar</h3><p>Testar o estado interno do componente torna a suíte frágil: qualquer refactor quebra testes mesmo quando o comportamento não mudou. Prefira checar o resultado visível.</p>'
    },
    {
      id: 'unit',
      meters: '5,5,1',
      content: '<p>Testam a menor peça de código, uma função ou uma classe, isolada do resto. RODAM em milissegundos e apontam a linha exata em que algo quebrou. São a base de toda a suíte.</p><ul class="chips"><li>Jest</li><li>JUnit</li><li>pytest</li></ul><p>As ferramentas de unidade dão velocidade e clareza. Elas permitem cobrir muitas regras de cálculo, transformações e comportamentos simples sem custo alto.</p><h3>Quando usar</h3><p>Para toda regra de negócio que pode ser expressa em poucos inputs e outputs. Esse é o melhor lugar para validar decisões lógicas e casos limítrofes.</p><h3>O que cuidar</h3><p>Não confunda cobertura com confiança. Um teste unitário ruim pode aumentar a sensação de segurança enquanto mente sobre o comportamento real do sistema.</p>'
    }
  ],
  summary: {
    title: 'Como montar a suíte',
    content: '<p>Comece pela base e suba conforme o risco. Muitos testes unitários, uma boa cobertura de API e integração nos pontos críticos, e poucos testes de UI para os fluxos que não podem falhar.</p><p>O objetivo não é ter uma camada de cada tipo. É que cada falha provável seja detectada na camada mais barata capaz de vê-la.</p>'
  },
  scen: [
    {
      t: 'Uma função que calcula desconto de cupom devolve valor negativo quando o cupom é maior que o pedido.',
      a: 'unit',
      why: 'É uma regra de cálculo isolada. Um teste unitário com esse caso limite pega o erro em milissegundos e mostra a linha exata.'
    },
    {
      t: 'O botão “Finalizar compra” continua desabilitado depois que a pessoa corrige o erro no formulário, mas só dentro da tela de checkout.',
      a: 'comp',
      why: 'O problema está no comportamento de um componente. Renderizá-lo isolado, digitar um valor válido e checar o botão resolve, sem subir o app inteiro.'
    },
    {
      t: 'A API responde 200, mas omite o campo “status” que o aplicativo móvel espera.',
      a: 'api',
      why: 'É uma questão de contrato de resposta. Um teste de API que valida o corpo da resposta detecta a ausência do campo direto no endpoint.'
    },
    {
      t: 'Uma migration renomeou uma coluna e a consulta do relatório mensal quebrou em produção.',
      a: 'db',
      why: 'Rodar as migrations em um banco vazio e executar as consultas críticas na integração contínua revelaria a coluna faltando antes do deploy.'
    },
    {
      t: 'O serviço de pagamentos de terceiros passou a demorar e o nosso sistema não trata o timeout.',
      a: 'int',
      why: 'É um ponto de contato entre sistemas. Com WireMock você simula a resposta lenta e verifica como o seu serviço reage.'
    },
    {
      t: 'O fluxo completo de login, carrinho e pagamento precisa funcionar no Safari do iPhone.',
      a: 'ui',
      why: 'Só um teste de ponta a ponta em um navegador real enxerga a experiência completa. Mantenha poucos, para os fluxos críticos.'
    }
  ]
};
