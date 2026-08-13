import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonList } from '../../../../services/pokemon-service';

export const fetchPokemons = createAsyncThunk('pokemon/fetchPokemons', async () => {
  return getPokemonList();
});
