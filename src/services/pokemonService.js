import apiClient from './apiClient';

/**
 * @typedef {Object} PokemonListResponse
 * @property {number} count
 * @property {Array<{ name: string, url: string }>} results
 */

/**
 * Fetches a paginated list of pokemons, then hydrates each entry with full details.
 * @param {{ offset: number, limit: number }} params
 * @returns {Promise<Array<object>>}
 */
export async function getPokemonList({ offset, limit }) {
  const { data } = await apiClient.get('/pokemon', { params: { offset, limit } });
  const details = await Promise.all(
    data.results.map((entry) => apiClient.get(entry.url).then((res) => res.data))
  );
  return details;
}

/**
 * Fetches a single pokemon by id or name.
 * @param {string | number} idOrName
 * @returns {Promise<object>}
 */
export async function getPokemonById(idOrName) {
  const { data } = await apiClient.get(`/pokemon/${idOrName}`);
  return data;
}

/**
 * Fetches pokemon species metadata (used to get the flavor-text description).
 * @param {string | number} idOrName
 * @returns {Promise<object>}
 */
export async function getPokemonSpecies(idOrName) {
  const { data } = await apiClient.get(`/pokemon-species/${idOrName}`);
  return data;
}

/**
 * Searches a pokemon by exact name.
 * The PokéAPI does not support partial matching, so this is an alias for getPokemonById.
 * @param {string} name
 * @returns {Promise<object>}
 */
export async function searchPokemon(name) {
  return getPokemonById(name.toLowerCase().trim());
}
