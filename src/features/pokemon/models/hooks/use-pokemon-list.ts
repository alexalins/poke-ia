'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../../store';
import { fetchPokemons } from '../thunks/fetch-pokemons';

export function usePokemonList() {
  const dispatch = useDispatch<AppDispatch>();
  const list = useSelector((s: RootState) => s.pokemon.entities);
  const status = useSelector((s: RootState) => s.pokemon.status);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchPokemons());
  }, [status, dispatch]);

  return { list, status };
}
