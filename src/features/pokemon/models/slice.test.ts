import reducer from './slice';
import { fetchPokemonDetail } from './thunks/fetch-pokemon-detail';
import { fetchPokemons } from './thunks/fetch-pokemons';
import type { Pokemon, PokemonDetail } from '../types';

describe('pokemon reducer', () => {
  it('starts with an idle empty list', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual({
      entities: [],
      selected: null,
      status: 'idle',
      detailStatus: 'idle',
      error: null,
      detailError: null,
    });
  });

  it('marks the list as loading while fetching pokemons', () => {
    expect(reducer(undefined, fetchPokemons.pending('', undefined))).toEqual({
      entities: [],
      selected: null,
      status: 'loading',
      detailStatus: 'idle',
      error: null,
      detailError: null,
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
      selected: null,
      status: 'succeeded',
      detailStatus: 'idle',
      error: null,
      detailError: null,
    });
  });

  it('stores the fetch error message', () => {
    expect(reducer(undefined, fetchPokemons.rejected(new Error('Network error'), '', undefined))).toEqual({
      entities: [],
      selected: null,
      status: 'failed',
      detailStatus: 'idle',
      error: 'Network error',
      detailError: null,
    });
  });

  it('stores pokemon detail after a successful fetch', () => {
    const pokemon: PokemonDetail = {
      id: 25,
      name: 'pikachu',
      image: 'official.png',
      baseExperience: 112,
      height: 0.4,
      weight: 6,
      types: ['electric'],
      abilities: [{ name: 'static', isHidden: false }],
      stats: [{ name: 'speed', value: 90 }],
    };

    expect(reducer(undefined, fetchPokemonDetail.fulfilled(pokemon, '', 25))).toEqual({
      entities: [],
      selected: pokemon,
      status: 'idle',
      detailStatus: 'succeeded',
      error: null,
      detailError: null,
    });
  });

  it('stores the detail fetch error message', () => {
    expect(reducer(undefined, fetchPokemonDetail.rejected(new Error('Not found'), '', 25))).toEqual({
      entities: [],
      selected: null,
      status: 'idle',
      detailStatus: 'failed',
      error: null,
      detailError: 'Not found',
    });
  });
});
