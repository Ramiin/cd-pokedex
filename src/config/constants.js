/**
 * Application-wide configuration constants.
 * Centralizing these avoids magic numbers/strings scattered across components.
 */

export const API_BASE_URL = 'https://pokeapi.co/api/v2';

export const PAGE_SIZE = 6;

export const TOTAL_POKEMONS = 1122;

export const TOTAL_PAGES = Math.ceil(TOTAL_POKEMONS / PAGE_SIZE);

export const RANDOM_POKEMON_ID_MIN = 1;

export const RANDOM_POKEMON_ID_MAX = 898;
