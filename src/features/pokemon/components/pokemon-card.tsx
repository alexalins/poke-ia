'use client';

import React from 'react';
import type { Pokemon } from '../types';

export default function PokemonCard({ p }: { p: Pokemon }) {
  return (
    <div className="border rounded p-4 flex flex-col items-center">
      <img src={p.image} alt={p.name} className="w-32 h-32 object-contain" />
      <h3 className="mt-2 capitalize font-semibold">{p.name}</h3>
      <span className="text-sm text-gray-500">#{p.id}</span>
    </div>
  );
}
