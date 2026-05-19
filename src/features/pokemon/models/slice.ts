import { createSlice } from '@reduxjs/toolkit';
import { fetchPokemons } from './thunks/fetch-pokemons';
import type { Pokemon } from '../types';

type State = {
  entities: Pokemon[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
};

const initialState: State = { entities: [], status: 'idle', error: null };

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
  },
});

export default slice.reducer;
