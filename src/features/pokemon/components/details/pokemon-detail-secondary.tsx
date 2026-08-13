import type { PokemonDetailViewModel } from '../../models/hooks/use-pokemon-detail-view';

type PokemonDetailSecondaryProps = {
  abilities: PokemonDetailViewModel['abilities'];
  format: PokemonDetailViewModel['format'];
};

const FormatTile = ({ label, value }: { label: string; value: string }) => (
  <div className="pokemon-detail__format-tile">
    <p className="pokemon-detail__format-label">{label}</p>
    <p className="pokemon-detail__format-value">{value}</p>
  </div>
);

export const PokemonDetailSecondary = ({ abilities, format }: PokemonDetailSecondaryProps) => (
  <div className="pokemon-detail__details-grid">
    <section className="pokemon-detail__abilities">
      <p className="pokemon-detail__abilities-title">Habilidades</p>
      <div className="pokemon-detail__ability-list">
        {abilities.map((ability) => (
          <span key={ability.name} className="pokemon-detail__ability">
            {ability.label}
          </span>
        ))}
      </div>
    </section>

    <section className="pokemon-detail__info-card">
      <p className="pokemon-detail__eyebrow">Formato</p>
      <div className="pokemon-detail__format-list">
        <FormatTile label="Peso" value={format.weight} />
        <FormatTile label="Altura" value={format.height} />
      </div>
    </section>
  </div>
);
