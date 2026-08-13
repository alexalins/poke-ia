import Link from 'next/link';
import { ArrowLeftIcon, BadgeIcon } from './pokemon-detail-icons';

type PokemonDetailToolbarProps = {
  idLabel: string;
};

export const PokemonDetailToolbar = ({ idLabel }: PokemonDetailToolbarProps) => (
  <div className="pokemon-detail__toolbar">
    <Link href="/pokemons" className="pokemon-detail__back-link">
      <ArrowLeftIcon />
      Voltar
    </Link>
    <span className="pokemon-detail__id-badge">
      <BadgeIcon />
      {idLabel}
    </span>
  </div>
);
