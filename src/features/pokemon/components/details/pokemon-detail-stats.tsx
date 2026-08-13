import type { PokemonDetailViewModel } from '../../models/hooks/use-pokemon-detail-view';
import { MetricIcon } from './pokemon-detail-icons';

type PokemonDetailStatsProps = {
  stats: PokemonDetailViewModel['stats'];
  accent: string;
};

const StatBar = ({ value, accent }: { value: number; accent: string }) => (
  <div className="pokemon-detail__stat-track">
    <div className={`pokemon-detail__stat-fill ${accent}`} style={{ width: `${value}%` }} />
  </div>
);

export const PokemonDetailStats = ({ stats, accent }: PokemonDetailStatsProps) => (
  <section className="pokemon-detail__info-card">
    <div className="pokemon-detail__section-heading">
      <span className="pokemon-detail__section-icon">
        <MetricIcon kind="xp" />
      </span>
      <div>
        <p className="pokemon-detail__eyebrow">Stats</p>
        <h2 className="pokemon-detail__section-title">Desempenho em batalha</h2>
      </div>
    </div>

    <div className="pokemon-detail__stats">
      {stats.map((stat) => (
        <div key={stat.name} className="pokemon-detail__stat">
          <div className="pokemon-detail__stat-header">
            <span>{stat.label}</span>
            <span>{stat.value}</span>
          </div>
          <StatBar value={stat.percentage} accent={accent} />
        </div>
      ))}
    </div>
  </section>
);
