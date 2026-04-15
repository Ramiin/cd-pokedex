import { describe, it, expect } from 'vitest';
import { mapPokemonToCard, extractPokemonTypes, extractDescription } from '../pokemonMapper';

const fakePokemon = {
  id: 25,
  name: 'pikachu',
  base_experience: 112,
  height: 4,
  sprites: { other: { 'official-artwork': { front_default: 'https://img/pikachu.png' } } },
  stats: [
    { base_stat: 35, stat: { name: 'hp' } },
    { base_stat: 55, stat: { name: 'attack' } },
    { base_stat: 40, stat: { name: 'defense' } },
    { base_stat: 50, stat: { name: 'special-attack' } },
    { base_stat: 50, stat: { name: 'special-defense' } },
    { base_stat: 90, stat: { name: 'speed' } },
  ],
  types: [{ type: { name: 'electric' } }],
};

describe('mapPokemonToCard', () => {
  it('maps raw API response to card-ready shape', () => {
    expect(mapPokemonToCard(fakePokemon)).toEqual({
      id: 25,
      name: 'pikachu',
      image: 'https://img/pikachu.png',
      hp: 35,
      attack: 55,
      defense: 40,
      special: 50,
      experience: 112,
    });
  });
});

describe('extractPokemonTypes', () => {
  it('returns an array of type names', () => {
    expect(extractPokemonTypes(fakePokemon)).toEqual(['electric']);
  });

  it('returns empty array when types are missing', () => {
    expect(extractPokemonTypes({})).toEqual([]);
  });
});

describe('extractDescription', () => {
  it('returns the first flavor text entry', () => {
    const species = { flavor_text_entries: [{ flavor_text: 'Loves ketchup.' }] };
    expect(extractDescription(species)).toBe('Loves ketchup.');
  });

  it('returns empty string when no entries exist', () => {
    expect(extractDescription({ flavor_text_entries: [] })).toBe('');
    expect(extractDescription({})).toBe('');
  });
});
