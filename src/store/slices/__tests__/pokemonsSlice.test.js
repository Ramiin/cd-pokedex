import { describe, it, expect } from 'vitest';
import reducer, { clearList, clearCurrent, fetchPokemonList } from '../pokemonsSlice';

describe('pokemonsSlice', () => {
  const initial = {
    list: [],
    current: null,
    description: '',
    status: 'idle',
    error: null,
  };

  it('returns initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initial);
  });

  it('clearList empties the list', () => {
    const prev = { ...initial, list: [{ id: 1 }] };
    expect(reducer(prev, clearList())).toEqual({ ...prev, list: [] });
  });

  it('clearCurrent resets current and description', () => {
    const prev = { ...initial, current: { id: 1 }, description: 'hi' };
    expect(reducer(prev, clearCurrent())).toEqual({ ...prev, current: null, description: '' });
  });

  it('fetchPokemonList.pending sets loading', () => {
    const next = reducer(initial, { type: fetchPokemonList.pending.type });
    expect(next.status).toBe('loading');
    expect(next.error).toBeNull();
  });

  it('fetchPokemonList.fulfilled stores payload', () => {
    const payload = [{ id: 1, name: 'bulbasaur' }];
    const next = reducer(initial, { type: fetchPokemonList.fulfilled.type, payload });
    expect(next.status).toBe('succeeded');
    expect(next.list).toEqual(payload);
  });

  it('fetchPokemonList.rejected stores error', () => {
    const next = reducer(initial, {
      type: fetchPokemonList.rejected.type,
      error: { message: 'boom' },
    });
    expect(next.status).toBe('failed');
    expect(next.error).toBe('boom');
  });
});
