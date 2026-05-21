'use client';

import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../../store';
import { fetchPokemons } from '../thunks/fetch-pokemons';

export function usePokemonList() {
  const dispatch = useDispatch<AppDispatch>();
  const list = useSelector((s: RootState) => s.pokemon.entities);
  const status = useSelector((s: RootState) => s.pokemon.status);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (status === 'idle') dispatch(fetchPokemons());
  }, [status, dispatch]);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const isIdSearch = /^#?\d+$/.test(normalizedQuery);
    const searchedId = Number(normalizedQuery.replace('#', ''));

    return list.filter((pokemon) => {
      if (!normalizedQuery) return true;
      if (isIdSearch) return pokemon.id === searchedId;
      return pokemon.name.includes(normalizedQuery);
    });
  }, [list, query]);

  return { filtered, query, setQuery, status };
}
