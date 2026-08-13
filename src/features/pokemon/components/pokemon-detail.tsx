import { usePokemonDetailView } from '../models/hooks/use-pokemon-detail-view';
import { PokemonDetailPanel, PokemonDetailToolbar } from './details';
import type { PokemonDetail } from '../types';

type PokemonDetailViewProps = {
  pokemon: PokemonDetail;
};

const PokemonDetailView = ({ pokemon }: PokemonDetailViewProps) => {
  const view = usePokemonDetailView(pokemon);

  return (
    <div className="pokemon-detail">
      <PokemonDetailToolbar idLabel={view.idLabel} />
      <PokemonDetailPanel pokemon={pokemon} view={view} />
    </div>
  );
};

export default PokemonDetailView;
