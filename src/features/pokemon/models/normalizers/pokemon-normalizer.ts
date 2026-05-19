import { Pokemon } from '../../types';

export function normalizePokemonList(results: Array<{ name: string; url: string }>): Pokemon[] {
  return results.map((r) => {
    const parts = r.url.split('/').filter(Boolean);
    const id = Number(parts[parts.length - 1]);
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    return { id, name: r.name, image };
  });
}
