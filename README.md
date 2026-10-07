# Iceberg da automação de testes

Uma experiência web interativa sobre as camadas de uma estratégia de automação de testes. O conteúdo usa um iceberg para mostrar a relação entre testes de UI, banco de dados, integração, API, componente e testes unitários.

## Recursos

- Navegação pelo iceberg clicando em uma camada ou usando o teclado.
- Destaque automático da camada correspondente durante a rolagem.
- Indicadores de velocidade, estabilidade e realismo para cada tipo de teste.
- Quiz interativo com seis cenários e feedback imediato.
- Idiomas disponíveis: português do Brasil, inglês, espanhol, francês, italiano e alemão.
- Tema claro/escuro conforme a preferência do sistema.
- Layout responsivo para desktop e dispositivos móveis.
- Suporte a `prefers-reduced-motion` e elementos com acessibilidade básica.

## Como executar

O projeto é estático e não exige instalação de dependências ou etapa de compilação.

### Abrir diretamente

Abra [`index.html`](./index.html) em um navegador moderno.

### Usar um servidor local

Para evitar limitações de alguns navegadores ao abrir arquivos locais, sirva a pasta com qualquer servidor HTTP. Por exemplo, usando Python:

```bash
python -m http.server 8000
```

Depois, acesse <http://localhost:8000>.

Também é possível usar a extensão Live Server do VS Code ou outro servidor estático equivalente.

## Estrutura

```text
.
├── index.html   # Estrutura da página e carregamento das traduções
├── locales/     # Objetos de conteúdo por idioma (`pt-BR.js`, `en.js`, etc.)
├── script.js    # Renderização do iceberg, navegação, indicadores e lógica do quiz
├── style.css    # Layout, temas, responsividade e estilos da experiência
└── README.md    # Documentação do projeto
```

## Desenvolvimento

O conteúdo principal de cada idioma está em arquivos separados em [`locales/`](./locales), e o [`script.js`](./script.js) renderiza a página a partir deles. A estrutura do HTML fica enxuta e mantém apenas o shell da aplicação. Para alterar a aparência, edite [`style.css`](./style.css).

Ao adicionar ou remover uma camada:

1. Atualize o grupo correspondente no SVG do iceberg.
2. Atualize a seção `.layer` com o mesmo valor de `data-layer`.
3. Ajuste os nomes, profundidades, métricas e cenários nas configurações de cada idioma.
4. Verifique a navegação por teclado, a rolagem e o quiz nos idiomas afetados.

## Licença

Nenhuma licença específica foi definida para este projeto.
