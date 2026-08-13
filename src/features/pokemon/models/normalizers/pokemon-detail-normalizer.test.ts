import { normalizePokemonDetail } from './pokemon-detail-normalizer';

describe('normalizePokemonDetail', () => {
  it('normalizes the detailed pokemon payload', () => {
    expect(
      normalizePokemonDetail({
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
        abilities: [
          { ability: { name: 'static' }, is_hidden: false },
          { ability: { name: 'lightning-rod' }, is_hidden: true },
        ],
        stats: [
          { stat: { name: 'hp' }, base_stat: 35 },
          { stat: { name: 'speed' }, base_stat: 90 },
        ],
      }),
    ).toEqual({
      id: 25,
      name: 'pikachu',
      image: 'official.png',
      baseExperience: 112,
      height: 0.4,
      weight: 6,
      types: ['electric'],
      abilities: [
        { name: 'static', isHidden: false },
        { name: 'lightning-rod', isHidden: true },
      ],
      stats: [
        { name: 'hp', value: 35 },
        { name: 'speed', value: 90 },
      ],
    });
  });
});
