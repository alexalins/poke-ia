import { POKEMON_LIST_LIMIT } from '../features/pokemon/constants';
import { PokemonNotFoundError } from '../features/pokemon/models/errors';
import { normalizePokemonDetail } from '../features/pokemon/models/normalizers/pokemon-detail-normalizer';
import { normalizePokemonList } from '../features/pokemon/models/normalizers/pokemon-normalizer';
import { api } from './api';

export async function getPokemonList() {
  const { data } = await api.get(`/pokemon?limit=${POKEMON_LIST_LIMIT}`);
  return normalizePokemonList(data.results);
}

export async function getPokemonDetail(id: string | number) {
  try {
    const { data } = await api.get(`/pokemon/${id}`);
    return normalizePokemonDetail(data);
  } catch (error) {
    if (isNotFoundError(error)) {
      throw new PokemonNotFoundError(id);
    }

    throw error;
  }
}

function isNotFoundError(error: unknown) {
  return typeof error === 'object' && error !== null && 'response' in error && getResponseStatus(error) === 404;
}

function getResponseStatus(error: object) {
  const response = (error as { response?: { status?: number } }).response;
  return response?.status;
}
