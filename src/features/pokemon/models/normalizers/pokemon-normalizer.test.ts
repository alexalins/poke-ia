import { normalizePokemonList } from './pokemon-normalizer';

describe('normalizePokemonList', () => {
  it('normalizes pokemon names, ids, and official artwork URLs', () => {
    expect(
      normalizePokemonList([
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
      ]),
    ).toEqual([
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
