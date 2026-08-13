import type { CSSProperties } from 'react';

type PokemonDetailHeroProps = {
  name: string;
  image: string;
  heroStyle: CSSProperties;
};

export const PokemonDetailHero = ({ name, image, heroStyle }: PokemonDetailHeroProps) => (
  <div className="pokemon-detail__hero" style={heroStyle}>
    <div className="pokemon-detail__hero-pattern">
      <div className="pokemon-detail__hero-ring pokemon-detail__hero-ring--sm" />
      <div className="pokemon-detail__hero-ring pokemon-detail__hero-ring--lg" />
      <div className="pokemon-detail__hero-ring pokemon-detail__hero-ring--bottom" />
    </div>
    <img src={image} alt={name} className="pokemon-detail__image" />
  </div>
);
