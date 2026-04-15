/**
 * Normalizes a raw PokéAPI pokemon response into the card-ready shape used by the UI.
 * @param {object} pokemon
 * @returns {{ id: number, name: string, image: string, hp: number, attack: number, defense: number, special: number, experience: number }}
 */
export function mapPokemonToCard(pokemon) {
  const statByName = Object.fromEntries(
    (pokemon.stats ?? []).map((s) => [s.stat.name, s.base_stat])
  );
  return {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites?.other?.['official-artwork']?.front_default ?? '',
    hp: statByName.hp ?? 0,
    attack: statByName.attack ?? 0,
    defense: statByName.defense ?? 0,
    special: statByName['special-attack'] ?? 0,
    experience: pokemon.base_experience ?? 0,
  };
}

/**
 * @param {object} pokemon
 * @returns {string[]}
 */
export function extractPokemonTypes(pokemon) {
  return (pokemon?.types ?? []).map((entry) => entry.type.name);
}

/**
 * @param {object} species
 * @returns {string}
 */
export function extractDescription(species) {
  const entries = species?.flavor_text_entries ?? [];
  return entries[0]?.flavor_text ?? '';
}
