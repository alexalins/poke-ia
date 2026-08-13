'use client';

import React from 'react';
import ClientProvider from '../../providers/ClientProvider';
import PokedexShell from '../../features/pokemon/components/pokedex-shell';
import PokemonList from '../../features/pokemon/components/pokemon-list';

export default function Page() {
  return (
    <ClientProvider>
      <main className="pokedex-page">
        <PokedexShell title="Pokémons" kicker="Pokedex digital">
          <PokemonList />
        </PokedexShell>
      </main>
    </ClientProvider>
  );
}
