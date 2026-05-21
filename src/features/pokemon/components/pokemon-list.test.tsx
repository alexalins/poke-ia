import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PokemonList from './pokemon-list';
import { usePokemonList } from '../models/hooks/use-pokemon-list';

jest.mock('../models/hooks/use-pokemon-list', () => ({
  usePokemonList: jest.fn(),
}));

const mockedUsePokemonList = jest.mocked(usePokemonList);

describe('PokemonList', () => {
  beforeEach(() => {
    mockedUsePokemonList.mockReturnValue({
      status: 'succeeded',
      list: [
        {
          id: 1,
          name: 'bulbasaur',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        },
        {
          id: 25,
          name: 'pikachu',
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        },
      ],
    });
  });

  it('filters pokemons by name', () => {
    render(<PokemonList />);

    fireEvent.change(screen.getByPlaceholderText('Buscar Pokémon por nome ou ID...'), {
      target: { value: 'pika' },
    });

    expect(screen.getByText('pikachu')).toBeInTheDocument();
    expect(screen.queryByText('bulbasaur')).not.toBeInTheDocument();
  });

  it('filters pokemons by exact pokedex id', () => {
    render(<PokemonList />);

    fireEvent.change(screen.getByPlaceholderText('Buscar Pokémon por nome ou ID...'), {
      target: { value: '25' },
    });

    expect(screen.getByText('pikachu')).toBeInTheDocument();
    expect(screen.queryByText('bulbasaur')).not.toBeInTheDocument();
  });

  it('filters pokemons by exact pokedex id with hash prefix', () => {
    render(<PokemonList />);

    fireEvent.change(screen.getByPlaceholderText('Buscar Pokémon por nome ou ID...'), {
      target: { value: '#25' },
    });

    expect(screen.getByText('pikachu')).toBeInTheDocument();
    expect(screen.queryByText('bulbasaur')).not.toBeInTheDocument();
  });
});
