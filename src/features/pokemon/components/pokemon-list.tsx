'use client';

import React, { useState } from 'react';
import { usePokemonList } from '../models/hooks/use-pokemon-list';
import PokemonCard from './pokemon-card';
import PokemonSearch from './pokemon-search';

export default function PokemonList() {
  const { list, status } = usePokemonList();
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();
  const isIdSearch = /^#?\d+$/.test(normalizedQuery);
  const searchedId = Number(normalizedQuery.replace('#', ''));
  const filtered = list.filter((p) => {
    if (!normalizedQuery) return true;
    if (isIdSearch) return p.id === searchedId;
    return p.name.includes(normalizedQuery);
  });

  if (status === 'loading') {
    return (
      <div className="rounded-lg border-4 border-slate-900 bg-emerald-200 p-6 text-center font-mono text-lg font-black uppercase text-slate-950 shadow-inner">
        Carregando...
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <PokemonSearch value={query} onChange={setQuery} />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((p) => (
          <PokemonCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}
