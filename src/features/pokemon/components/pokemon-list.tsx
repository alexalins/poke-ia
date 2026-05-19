'use client';

import React, { useState } from 'react';
import { usePokemonList } from '../models/hooks/use-pokemon-list';
import PokemonCard from './pokemon-card';
import PokemonSearch from './pokemon-search';

export default function PokemonList() {
  const { list, status } = usePokemonList();
  const [query, setQuery] = useState('');
  const filtered = list.filter((p) => p.name.includes(query.toLowerCase()));

  if (status === 'loading') return <div>Carregando...</div>;

  return (
    <div>
      <PokemonSearch value={query} onChange={setQuery} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {filtered.map((p) => (
          <PokemonCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}
