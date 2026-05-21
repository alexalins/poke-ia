'use client';

import React from 'react';

export default function PokemonSearch({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="rounded-xl border-4 border-slate-950 bg-slate-800 p-3 shadow-lg">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar Pokémon por nome ou ID..."
        inputMode="search"
        className="w-full rounded-md border-2 border-emerald-950 bg-emerald-200 px-4 py-3 font-mono text-base font-bold text-slate-950 outline-none transition placeholder:text-emerald-900/70 focus:border-yellow-300 focus:ring-4 focus:ring-yellow-300/40"
      />
    </div>
  );
}
