import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonDetail } from '../../../../services/pokemon-service';

export const fetchPokemonDetail = createAsyncThunk('pokemon/fetchPokemonDetail', async (id: string | number) => {
  return getPokemonDetail(id);
});
