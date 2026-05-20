'use client';

import React from 'react';

const statusLights = [
  'pokedex-status-light pokedex-status-light--red',
  'pokedex-status-light pokedex-status-light--yellow',
  'pokedex-status-light pokedex-status-light--green',
];

export default function PokedexShell({ children }: { children: React.ReactNode }) {
  return (
    <section className="pokedex-shell" aria-labelledby="pokedex-title">
      <header className="pokedex-topbar">
        <span className="pokedex-camera" aria-hidden="true" />
        <div className="pokedex-status-lights" aria-hidden="true">
          {statusLights.map((className) => (
            <span key={className} className={className} />
          ))}
        </div>
      </header>

      <div className="pokedex-screen">
        <div className="pokedex-heading">
          <div>
            <p className="pokedex-kicker">Pokedex digital</p>
            <h1 id="pokedex-title" className="pokedex-title">
              Pokémons
            </h1>
          </div>
          <span className="pokedex-speaker" aria-hidden="true" />
        </div>

        {children}
      </div>
    </section>
  );
}
