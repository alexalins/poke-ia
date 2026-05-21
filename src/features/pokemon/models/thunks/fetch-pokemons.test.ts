import { api } from '../../../../services/api';
import { fetchPokemons } from './fetch-pokemons';

jest.mock('../../../../services/api', () => ({
  api: {
    get: jest.fn(),
  },
}));

const mockedApi = jest.mocked(api);

describe('fetchPokemons', () => {
  it('fetches the first 151 pokemons and normalizes the response', async () => {
    mockedApi.get.mockResolvedValueOnce({
      data: {
        results: [
          { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
          { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
        ],
      },
    });

    const dispatch = jest.fn();
    const getState = jest.fn();
    const action = await fetchPokemons()(dispatch, getState, undefined);

    expect(mockedApi.get).toHaveBeenCalledWith('/pokemon?limit=151');
    expect(action.type).toBe(fetchPokemons.fulfilled.type);
    expect(action.payload).toEqual([
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
    ]);
  });
});
