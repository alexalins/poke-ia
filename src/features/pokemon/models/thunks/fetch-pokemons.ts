import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../../../services/api';
import { normalizePokemonList } from '../normalizers/pokemon-normalizer';

export const fetchPokemons = createAsyncThunk('pokemon/fetchPokemons', async () => {
  const res = await api.get('/pokemon?limit=151');
  return normalizePokemonList(res.data.results);
});
