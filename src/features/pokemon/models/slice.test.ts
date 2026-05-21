import reducer from './slice';
import { fetchPokemons } from './thunks/fetch-pokemons';
import type { Pokemon } from '../types';

describe('pokemon reducer', () => {
  it('starts with an idle empty list', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual({
      entities: [],
      status: 'idle',
      error: null,
    });
  });

  it('marks the list as loading while fetching pokemons', () => {
    expect(reducer(undefined, fetchPokemons.pending('', undefined))).toEqual({
      entities: [],
      status: 'loading',
      error: null,
    });
  });

  it('stores pokemons after a successful fetch', () => {
    const pokemons: Pokemon[] = [
      {
        id: 25,
        name: 'pikachu',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      },
    ];

    expect(reducer(undefined, fetchPokemons.fulfilled(pokemons, '', undefined))).toEqual({
      entities: pokemons,
      status: 'succeeded',
      error: null,
    });
  });

  it('stores the fetch error message', () => {
    expect(reducer(undefined, fetchPokemons.rejected(new Error('Network error'), '', undefined))).toEqual({
      entities: [],
      status: 'failed',
      error: 'Network error',
    });
  });
});
