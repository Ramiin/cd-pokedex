import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../apiClient', () => ({
  default: { get: vi.fn() },
}));

import apiClient from '../apiClient';
import { getPokemonById, searchPokemon } from '../pokemonService';

describe('pokemonService', () => {
  beforeEach(() => {
    apiClient.get.mockReset();
  });

  it('getPokemonById calls the correct endpoint', async () => {
    apiClient.get.mockResolvedValue({ data: { id: 1, name: 'bulbasaur' } });
    const result = await getPokemonById(1);
    expect(apiClient.get).toHaveBeenCalledWith('/pokemon/1');
    expect(result).toEqual({ id: 1, name: 'bulbasaur' });
  });

  it('searchPokemon normalizes the query', async () => {
    apiClient.get.mockResolvedValue({ data: { id: 25, name: 'pikachu' } });
    await searchPokemon('  PIKACHU  ');
    expect(apiClient.get).toHaveBeenCalledWith('/pokemon/pikachu');
  });
});
