import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomPokemon, clearCurrent } from '../store/slices/pokemonsSlice';

/**
 * Loads a random pokemon into the redux `current` slot.
 */
export function useRandomPokemon() {
  const dispatch = useDispatch();
  const { current, status, error } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(clearCurrent());
    dispatch(fetchRandomPokemon());
  }, [dispatch]);

  return {
    pokemon: current,
    isLoading: status === 'loading',
    error,
  };
}
