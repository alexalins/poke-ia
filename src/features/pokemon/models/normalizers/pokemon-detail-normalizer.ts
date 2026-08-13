import type { PokemonDetail } from '../../types';

type RawPokemonDetail = {
  id: number;
  name: string;
  base_experience: number | null;
  height: number;
  weight: number;
  sprites: {
    front_default: string | null;
    other?: {
      'official-artwork'?: {
        front_default: string | null;
      };
      home?: {
        front_default: string | null;
      };
    };
  };
  types: Array<{ type: { name: string } }>;
  abilities: Array<{ ability: { name: string }; is_hidden: boolean }>;
  stats: Array<{ stat: { name: string }; base_stat: number }>;
};

export function normalizePokemonDetail(data: RawPokemonDetail): PokemonDetail {
  return {
    id: data.id,
    name: data.name,
    image:
      data.sprites.other?.['official-artwork']?.front_default ??
      data.sprites.other?.home?.front_default ??
      data.sprites.front_default ??
      '',
    baseExperience: data.base_experience,
    height: data.height / 10,
    weight: data.weight / 10,
    types: data.types.map(({ type }) => type.name),
    abilities: data.abilities.map(({ ability, is_hidden }) => ({
      name: ability.name,
      isHidden: is_hidden,
    })),
    stats: data.stats.map(({ stat, base_stat }) => ({
      name: stat.name,
      value: base_stat,
    })),
  };
}
