'use client';

import React from 'react';
import { usePokemonList } from '../models/hooks/use-pokemon-list';
import PokemonCard from './pokemon-card';
import PokemonLoading from './pokemon-loading';
import PokemonSearch from './pokemon-search';

export default function PokemonList() {
  const { filtered, query, setQuery, status } = usePokemonList();

  if (status === 'loading') {
    return <PokemonLoading />;
  }

  return (
    <div className="space-y-5">
      <PokemonSearch value={query} onChange={setQuery} />
      {filtered.length === 0 ? (
        <div className="rounded-2xl border-4 border-slate-950 bg-amber-100 p-5 text-center shadow-[6px_6px_0_#0f172a]">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-red-700">Nenhum resultado</p>
          <p className="mt-2 text-lg font-black text-slate-950">Tente outro nome ou número da Pokédex.</p>
        </div>
      ) : null}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((p) => (
          <PokemonCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}
