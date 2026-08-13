import { notFound } from 'next/navigation';
import PokedexShell from '../../../features/pokemon/components/pokedex-shell';
import PokemonDetailView from '../../../features/pokemon/components/pokemon-detail';
import { getPokemonDetail } from '../../../services/pokemon-service';

type Params = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Params) {
  try {
    const pokemon = await getPokemonDetail(params.id);

    return (
      <main className="pokedex-page">
        <PokedexShell title="Detalhes" kicker="Pokedex digital">
          <PokemonDetailView pokemon={pokemon} />
        </PokedexShell>
      </main>
    );
  } catch {
    notFound();
  }
}
