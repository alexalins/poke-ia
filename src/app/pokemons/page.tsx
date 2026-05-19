'use client';

import React from 'react';
import ClientProvider from '../../providers/ClientProvider';
import PokemonList from '../../features/pokemon/components/pokemon-list';

export default function Page() {
  return (
    <ClientProvider>
      <main className="p-6">
        <h1 className="text-2xl font-bold">Pokémons</h1>
        <PokemonList />
      </main>
    </ClientProvider>
  );
}
