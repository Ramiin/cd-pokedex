import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPokemonById,
  fetchPokemonDescription,
  clearCurrent,
} from '../store/slices/pokemonsSlice';

/**
 * Loads a single pokemon and its species description into the redux store.
 * @param {string | number} idOrName
 */
export function usePokemonDetails(idOrName) {
  const dispatch = useDispatch();
  const { current, description, status, error } = useSelector((state) => state.pokemons);

  useEffect(() => {
    if (!idOrName) return;
    dispatch(clearCurrent());
    dispatch(fetchPokemonById(idOrName));
    dispatch(fetchPokemonDescription(idOrName));
  }, [dispatch, idOrName]);

  return {
    pokemon: current,
    description,
    isLoading: status === 'loading',
    error,
  };
}
