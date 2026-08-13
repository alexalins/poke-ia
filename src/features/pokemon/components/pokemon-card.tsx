'use client';

import React from 'react';
import Link from 'next/link';
import type { Pokemon } from '../types';

export default function PokemonCard({ p }: { p: Pokemon }) {
  return (
    <Link
      href={`/pokemons/${p.id}`}
      aria-label={`Abrir detalhes de ${p.name}`}
      className="pokemon-card group"
    >
      <div className="pokemon-card__image-frame">
        <img src={p.image} alt={p.name} className="pokemon-card__image" />
      </div>
      <h3 className="pokemon-card__name">{p.name}</h3>
      <span className="pokemon-card__number">#{p.id}</span>
    </Link>
  );
}
