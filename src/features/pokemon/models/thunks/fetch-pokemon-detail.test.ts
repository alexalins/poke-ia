import { getPokemonDetail } from '../../../../services/pokemon-service';
import { fetchPokemonDetail } from './fetch-pokemon-detail';

jest.mock('../../../../services/pokemon-service', () => ({
  getPokemonDetail: jest.fn(),
}));

const mockedGetPokemonDetail = jest.mocked(getPokemonDetail);

describe('fetchPokemonDetail', () => {
  it('fetches pokemon detail from the pokemon service', async () => {
    const pokemon = {
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

    mockedGetPokemonDetail.mockResolvedValueOnce(pokemon);

    const dispatch = jest.fn();
    const getState = jest.fn();
    const action = await fetchPokemonDetail(25)(dispatch, getState, undefined);

    expect(mockedGetPokemonDetail).toHaveBeenCalledWith(25);
    expect(action.type).toBe(fetchPokemonDetail.fulfilled.type);
    expect(action.payload).toEqual(pokemon);
  });
});
