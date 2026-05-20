'use client';

import React from 'react';
import type { Pokemon } from '../types';

export default function PokemonCard({ p }: { p: Pokemon }) {
  return (
    <div className="group flex min-h-56 flex-col items-center rounded-lg border-4 border-slate-950 bg-white p-3 shadow-[6px_6px_0_#0f172a] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#0f172a]">
      <div className="flex aspect-square w-full items-center justify-center rounded-md border-2 border-slate-900 bg-gradient-to-br from-cyan-100 via-slate-50 to-emerald-100 p-3 shadow-inner">
        <img src={p.image} alt={p.name} className="h-28 w-28 object-contain transition group-hover:scale-110 sm:h-32 sm:w-32" />
      </div>
      <h3 className="mt-3 w-full truncate text-center text-base font-black capitalize text-slate-950">{p.name}</h3>
      <span className="mt-1 rounded-full bg-red-700 px-3 py-1 font-mono text-xs font-black text-white">#{p.id}</span>
    </div>
  );
}
