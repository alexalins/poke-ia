export class PokemonNotFoundError extends Error {
  constructor(identifier: string | number) {
    super(`Pokemon not found: ${identifier}`);
    this.name = 'PokemonNotFoundError';
  }
}
