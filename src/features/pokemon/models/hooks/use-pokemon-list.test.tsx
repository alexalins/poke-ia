import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { renderHook, waitFor } from '@testing-library/react';
import pokemonReducer from '../slice';
import { api } from '../../../../services/api';
import { usePokemonList } from './use-pokemon-list';

jest.mock('../../../../services/api', () => ({
  api: {
    get: jest.fn(),
  },
}));

const mockedApi = jest.mocked(api);

function createWrapper() {
  const store = configureStore({
    reducer: { pokemon: pokemonReducer },
  });

  return function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  };
}

describe('usePokemonList', () => {
  it('fetches and exposes the pokemon list when the store is idle', async () => {
    mockedApi.get.mockResolvedValueOnce({
      data: {
        results: [{ name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' }],
      },
    });

    const { result } = renderHook(() => usePokemonList(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.status).toBe('succeeded');
    });

    expect(result.current.list).toEqual([
      {
        id: 25,
        name: 'pikachu',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      },
    ]);
  });
});
