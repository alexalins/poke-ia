import { PokemonNotFoundError } from '../features/pokemon/models/errors';
import { api } from './api';
import { getPokemonDetail, getPokemonList } from './pokemon-service';

jest.mock('./api', () => ({
  api: {
    get: jest.fn(),
  },
}));

const mockedApi = jest.mocked(api);

describe('pokemon service', () => {
  it('fetches and normalizes the pokemon list', async () => {
    mockedApi.get.mockResolvedValueOnce({
      data: {
        results: [{ name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' }],
      },
    });

    await expect(getPokemonList()).resolves.toEqual([
      {
        id: 25,
        name: 'pikachu',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      },
    ]);
    expect(mockedApi.get).toHaveBeenCalledWith('/pokemon?limit=151');
  });

  it('fetches and normalizes pokemon detail', async () => {
    mockedApi.get.mockResolvedValueOnce({
      data: {
        id: 25,
        name: 'pikachu',
        base_experience: 112,
        height: 4,
        weight: 60,
        sprites: {
          front_default: 'fallback.png',
          other: {
            'official-artwork': {
              front_default: 'official.png',
            },
          },
        },
        types: [{ type: { name: 'electric' } }],
        abilities: [{ ability: { name: 'static' }, is_hidden: false }],
        stats: [{ stat: { name: 'speed' }, base_stat: 90 }],
      },
    });

    await expect(getPokemonDetail(25)).resolves.toEqual({
      id: 25,
      name: 'pikachu',
      image: 'official.png',
      baseExperience: 112,
      height: 0.4,
      weight: 6,
      types: ['electric'],
      abilities: [{ name: 'static', isHidden: false }],
      stats: [{ name: 'speed', value: 90 }],
    });
  });

  it('throws a typed error when pokemon is not found', async () => {
    mockedApi.get.mockRejectedValueOnce({ response: { status: 404 } });

    await expect(getPokemonDetail('missingno')).rejects.toThrow(PokemonNotFoundError);
  });
});
