import type { PokemonDetail } from '../../types';
import type { PokemonDetailViewModel } from '../../models/hooks/use-pokemon-detail-view';
import { PokemonDetailHero } from './pokemon-detail-hero';
import { PokemonDetailMetrics } from './pokemon-detail-metrics';
import { PokemonDetailSecondary } from './pokemon-detail-secondary';
import { PokemonDetailStats } from './pokemon-detail-stats';

type PokemonDetailPanelProps = {
  pokemon: PokemonDetail;
  view: PokemonDetailViewModel;
};

export const PokemonDetailPanel = ({ pokemon, view }: PokemonDetailPanelProps) => (
  <section className={`pokemon-detail__panel ${view.theme.panel}`} style={view.theme.panelStyle}>
    <div className="pokemon-detail__layout">
      <PokemonDetailHero name={pokemon.name} image={pokemon.image} heroStyle={view.theme.heroStyle} />

      <div className="pokemon-detail__content">
        <div className="pokemon-detail__summary">
          <div>
            <p className="pokemon-detail__eyebrow">Pokémon selecionado</p>
            <h1 className={`pokemon-detail__title ${view.theme.accent}`}>{pokemon.name}</h1>
            <div className="pokemon-detail__types">
              {pokemon.types.map((type) => (
                <span key={type} className={`pokemon-detail__type ${view.theme.badge}`}>
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div className={`pokemon-detail__xp-card ${view.theme.badge}`}>
            <p className="pokemon-detail__mini-label">Base exp.</p>
            <p className="pokemon-detail__xp-value">{view.baseExperience}</p>
          </div>
        </div>

        <PokemonDetailMetrics metrics={view.metrics} />
        <PokemonDetailStats stats={view.stats} accent={view.theme.bar} />
        <PokemonDetailSecondary abilities={view.abilities} format={view.format} />
      </div>
    </div>
  </section>
);
