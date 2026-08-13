# AGENTS.md

## Language Rules

* All explanations, documentation, comments outside code, and assistant responses must be written in Brazilian Portuguese (pt-BR).
* All source code must be written in English.
* All unit and integration tests must be written in English.
* Do not use Portuguese identifiers inside code.
* User-facing texts may be written in Portuguese when required by the application.

---

## Project Context

This project is a Pokémon application built with Next.js and React consuming the PokéAPI.

API:
https://pokeapi.co/

Main features:

* List Pokémons
* Search by Pokémon name
* Search by Pokémon id
* Display image, name, id, and types
* Support loading, error, and empty states
* Support pagination or infinite scroll

---

## Required Stack

* Next.js (App Router)
* React
* TypeScript
* Redux Toolkit
* React Redux
* Axios
* TailwindCSS
* React Testing Library
* Jest or Vitest

---

## Architecture Rules

* Follow feature-based architecture.
* Keep UI separated from business logic.
* Never perform HTTP requests directly inside React components.
* All API responses must pass through normalizers before reaching the UI.
* Prefer reusable components.
* Prioritize readability, maintainability, and scalability.
* Prioritize accessibility.
* Avoid duplicated code.
* Follow clean code principles.
* Avoid use of `any`.
* Use strict TypeScript.

---

## Folder Structure

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

## Pokémon Feature Structure

```txt
src/features/pokemon/
├── components/
│   ├── pokemon-card.tsx
│   ├── pokemon-list.tsx
│   ├── pokemon-search.tsx
│   └── pokemon-loading.tsx
├── models/
│   ├── hooks/
│   ├── presenter/
│   ├── normalizers/
│   ├── thunks/
│   ├── errors/
│   ├── selectors.ts
│   └── slice.ts
├── constants.ts
└── types.ts
```

---

## Naming Conventions

### Files

* kebab-case

### Components

* PascalCase

### Functions and Variables

* camelCase

### Constants

* UPPER_CASE

### Hooks

* Must start with `use`

---

## Testing Rules

* Write all tests in English.
* Use React Testing Library.
* Test behavior instead of implementation details.
* Include accessibility assertions whenever possible.
* Generate tests alongside new business logic.

Example:

```tsx
describe("PokemonSearch", () => {
  it("should search pokemon by name", () => {});
});
```

---

## Search Requirements

The Pokémon search must:

* Search by name
* Search by id
* Ignore case sensitivity
* Search while typing
* Display loading state
* Display empty state
* Display error state when Pokémon is not found

---

## Development Workflow

Before executing commands, inspect:

* package.json
* tsconfig.json
* next.config.js
* jest.config.*
* vitest.config.*
* tailwind.config.*

Always prefer project scripts defined in package.json.

Common commands:

```bash
npm run dev
npm run build
npm run start
npm run lint
npm test
```

---

## CI/CD

If GitHub Actions exist:

* Follow existing workflow naming conventions.
* Ensure pipelines execute:

```txt
install -> lint -> test -> build
```

---

## Code Generation Priorities

1. Follow the defined architecture.
2. Keep business logic outside UI components.
3. Use strict TypeScript.
4. Build scalable solutions.
5. Create reusable components.
6. Keep all code in English.
7. Keep explanations in pt-BR.
8. Generate tests when creating business logic.
9. Prioritize accessibility.
10. Prioritize maintainability and readability.
