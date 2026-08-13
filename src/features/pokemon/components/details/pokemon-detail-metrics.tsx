import type { ReactNode } from 'react';
import type { PokemonDetailViewModel } from '../../models/hooks/use-pokemon-detail-view';
import { MetricIcon } from './pokemon-detail-icons';

type PokemonDetailMetricsProps = {
  metrics: PokemonDetailViewModel['metrics'];
};

type MetricTileProps = {
  icon: ReactNode;
  label: string;
  value: string;
  tone: string;
};

const MetricTile = ({ icon, label, value, tone }: MetricTileProps) => (
  <div className={`pokemon-detail__metric ${tone}`}>
    <div className="pokemon-detail__metric-content">
      <span className="pokemon-detail__metric-icon">{icon}</span>
      <div className="pokemon-detail__metric-copy">
        <p className="pokemon-detail__metric-label">{label}</p>
        <p className="pokemon-detail__metric-value">{value}</p>
      </div>
    </div>
  </div>
);

export const PokemonDetailMetrics = ({ metrics }: PokemonDetailMetricsProps) => (
  <div className="pokemon-detail__metrics">
    {metrics.map((metric) => (
      <MetricTile
        key={metric.label}
        icon={<MetricIcon kind={metric.icon} />}
        label={metric.label}
        value={metric.value}
        tone={metric.tone}
      />
    ))}
  </div>
);
