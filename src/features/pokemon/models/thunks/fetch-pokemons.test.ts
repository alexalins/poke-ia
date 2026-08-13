import { getPokemonList } from '../../../../services/pokemon-service';
import { fetchPokemons } from './fetch-pokemons';

jest.mock('../../../../services/pokemon-service', () => ({
  getPokemonList: jest.fn(),
}));

const mockedGetPokemonList = jest.mocked(getPokemonList);

describe('fetchPokemons', () => {
  it('fetches the pokemon list from the pokemon service', async () => {
    const pokemons = [
      {
        id: 1,
        name: 'bulbasaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      },
      {
        id: 25,
        name: 'pikachu',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      },
    ];

    mockedGetPokemonList.mockResolvedValueOnce(pokemons);

    const dispatch = jest.fn();
    const getState = jest.fn();
    const action = await fetchPokemons()(dispatch, getState, undefined);

    expect(mockedGetPokemonList).toHaveBeenCalledTimes(1);
    expect(action.type).toBe(fetchPokemons.fulfilled.type);
    expect(action.payload).toEqual(pokemons);
  });
});
