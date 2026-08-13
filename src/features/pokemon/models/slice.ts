import { createSlice } from '@reduxjs/toolkit';
import { fetchPokemonDetail } from './thunks/fetch-pokemon-detail';
import { fetchPokemons } from './thunks/fetch-pokemons';
import type { Pokemon, PokemonDetail } from '../types';

type State = {
  entities: Pokemon[];
  selected: PokemonDetail | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  detailStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
  detailError?: string | null;
};

const initialState: State = {
  entities: [],
  selected: null,
  status: 'idle',
  detailStatus: 'idle',
  error: null,
  detailError: null,
};

const slice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.entities = action.payload;
    });
    builder.addCase(fetchPokemons.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message ?? null;
    });
    builder.addCase(fetchPokemonDetail.pending, (state) => {
      state.detailStatus = 'loading';
      state.detailError = null;
    });
    builder.addCase(fetchPokemonDetail.fulfilled, (state, action) => {
      state.detailStatus = 'succeeded';
      state.selected = action.payload;
    });
    builder.addCase(fetchPokemonDetail.rejected, (state, action) => {
      state.detailStatus = 'failed';
      state.detailError = action.error.message ?? null;
    });
  },
});

export default slice.reducer;
