'use client';

import React from 'react';

export default function PokemonSearch({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Buscar Pokémon..."
      className="w-full p-2 border rounded"
    />
  );
}
