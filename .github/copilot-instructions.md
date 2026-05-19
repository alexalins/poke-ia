# Instruções Copilot — Next.js + React + Pokémon API

## Regras de linguagem

- Todas as respostas, explicações e documentações devem ser escritas em português brasileiro (pt-BR)
- Todo código deve ser escrito em inglês
- Todos os testes unitários devem ser escritos em inglês
- Nomes de variáveis, funções, componentes, hooks, arquivos, pastas, interfaces, types e enums devem ser em inglês
- Não misturar português dentro do código
- Textos exibidos para o usuário podem ser em português

---

## Objetivo do projeto

Este projeto é uma aplicação em Next.js + React para listagem de Pokémons utilizando a API pública da PokéAPI.

API: https://pokeapi.co/

A aplicação deve:

- Listar Pokémons
- Buscar Pokémons por:
  - nome
  - id
- Exibir:
  - imagem
  - nome
  - id
  - tipos
- Possuir arquitetura escalável
- Utilizar TypeScript estrito
- Seguir clean code
- Seguir arquitetura baseada em features

---

## Stack obrigatória

- Next.js (App Router)
- React
- TypeScript
- Redux Toolkit
- React Redux
- Axios
- TailwindCSS
- Jest ou Vitest
- React Testing Library

---

## Estrutura obrigatória

```txt
src/
├── app/
├── components/
├── config/
├── features/
├── libs/
├── providers/
├── routes/
├── services/
└── store/
```

---

## Comandos principais (build / test / lint)

Se o repositório utiliza npm/yarn/pnpm, prefira o gerenciador do projeto. Caso não exista package.json, use os comandos abaixo como referência ao adicionar scripts.

- Instalar dependências
  - npm install
  - yarn install
  - pnpm install

- Dev / Build / Start
  - npm run dev          # inicia Next.js em desenvolvimento
  - npm run build        # build para produção
  - npm run start        # executa servidor de produção

- Lint / Formatação
  - npm run lint         # executa ESLint
  - npm run format       # executa Prettier (se configurado)

- Testes
  - npm test             # executa suite completa de testes (Jest ou Vitest)
  - npm run test:watch   # modo observação (se configurado)

- Executar um teste específico por nome
  - Jest: npx jest -t "padrão do nome do teste"
    Exemplo: npx jest -t "should search pokemon by name"
  - Vitest: npx vitest -t "padrão do nome do teste"
    Exemplo: npx vitest -t "should search pokemon by name"

- Docker (se Dockerfile presente)
  - docker build -t pokeia .
  - docker run -p 3000:3000 --env-file .env.local pokeia

Se scripts customizados existem em package.json, use-os (ex.: npm run lint:staged). Copilot deve procurar package.json antes de executar comandos.

---

## Regras gerais

- Utilizar arquitetura baseada em features
- Separar UI da regra de negócio
- Não realizar chamadas HTTP diretamente em componentes
- Toda resposta externa deve passar por normalizers
- Utilizar TypeScript estrito
- Evitar uso de any
- Priorizar acessibilidade
- Priorizar manutenção e legibilidade
- Priorizar componentes reutilizáveis

---

## Estrutura esperada da feature Pokémon

```txt
src/features/pokemon/
├── components/
│   ├── pokemon-card.tsx
│   ├── pokemon-list.tsx
│   ├── pokemon-search.tsx
│   └── pokemon-loading.tsx
├── models/
│   ├── hooks/
│   │   ├── use-pokemon-list.ts
│   │   └── use-pokemon-search.ts
│   ├── normalizers/
│   │   └── pokemon-normalizer.ts
│   ├── thunks/
│   │   ├── fetch-pokemons.ts
│   │   └── search-pokemon.ts
│   ├── errors/
│   │   └── pokemon-not-found-error.ts
│   ├── selectors.ts
│   └── slice.ts
├── constants.ts
└── types.ts
```

---

## Regras de nomenclatura

### Arquivos
Usar kebab-case.

### Componentes
Usar PascalCase.

### Funções e variáveis
Usar camelCase.

### Constantes
Usar UPPER_CASE.

### Hooks
Devem começar com use.

---

## Testes

- Todos os testes devem ser escritos em inglês
- Utilizar React Testing Library
- Utilizar Jest ou Vitest
- Testar comportamento e acessibilidade

Exemplo:

```tsx
describe("PokemonSearch", () => {
  it("should search pokemon by name", () => {});
});
```

---

## Requisitos da busca

O campo de busca deve:
- Buscar por nome
- Buscar por id
- Ignorar maiúsculas/minúsculas
- Buscar enquanto digita
- Exibir loading
- Exibir estado vazio
- Exibir erro quando Pokémon não existir

---

## Página esperada

### /pokemons

Funcionalidades:
- Listagem de Pokémons
- Campo de busca
- Loading state
- Error state
- Empty state
- Paginação ou infinite scroll

---

## Prioridades do Copilot

Ao gerar código:

1. Seguir exatamente a arquitetura definida
2. Separar UI da regra de negócio
3. Utilizar TypeScript estrito
4. Criar código escalável
5. Criar componentes reutilizáveis
6. Manter todo código em inglês
7. Manter explicações em pt-BR
8. Gerar testes unitários junto da lógica
9. Priorizar acessibilidade
10. Priorizar manutenção e legibilidade

---

## Arquivos a verificar antes de executar comandos

- package.json (scripts)
- tsconfig.json (configurações estritas)
- next.config.js (flags de runtime do Next.js)
- jest.config.* ou vitest.config.* (configuração do test runner)
- tailwind.config.* (estilos)

Copilot deve detectar esses arquivos e adaptar os comandos conforme necessário.

---

## CI / GitHub Actions / Docker

- Se .github/workflows existe, seguir os nomes dos workflows (ex.: test, build, lint)
- Ao adicionar CI, garantir que as actions executem install -> lint -> test -> build
- Comandos Docker referenciados acima são padrão se um Dockerfile existe

---

## Notas para futuras sessões do Copilot

- Ao modificar ou gerar código, preferir os caminhos baseados em features sob src/features
- Executar scripts de package.json quando disponível; recorrer aos comandos genéricos acima apenas se package.json estiver ausente
- Respeitar as regras de linguagem: docs em pt-BR, código/testes em English
