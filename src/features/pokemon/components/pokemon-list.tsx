'use client';

import React from 'react';
import { usePokemonList } from '../models/hooks/use-pokemon-list';
import PokemonCard from './pokemon-card';
import PokemonSearch from './pokemon-search';

export default function PokemonList() {
  const { filtered, query, setQuery, status } = usePokemonList();

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
