import { api } from './api';

describe('api', () => {
  it('uses PokeAPI as the base URL', () => {
    expect(api.defaults.baseURL).toBe('https://pokeapi.co/api/v2');
  });
});
