import type { RootState } from '../../../store';

export const selectPokemonEntities = (state: RootState) => state.pokemon.entities;

export const selectPokemonStatus = (state: RootState) => state.pokemon.status;

export const selectPokemonError = (state: RootState) => state.pokemon.error;

export const selectSelectedPokemon = (state: RootState) => state.pokemon.selected;

export const selectPokemonDetailStatus = (state: RootState) => state.pokemon.detailStatus;

export const selectPokemonDetailError = (state: RootState) => state.pokemon.detailError;
