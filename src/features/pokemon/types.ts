export interface Pokemon {
  id: number;
  name: string;
  image: string;
}

export interface PokemonStat {
  name: string;
  value: number;
}

export interface PokemonAbility {
  name: string;
  isHidden: boolean;
}

export interface PokemonDetail extends Pokemon {
  baseExperience: number | null;
  height: number;
  weight: number;
  types: string[];
  abilities: PokemonAbility[];
  stats: PokemonStat[];
}
