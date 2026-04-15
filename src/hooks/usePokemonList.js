import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonList, clearList } from '../store/slices/pokemonsSlice';
import { PAGE_SIZE } from '../config/constants';

/**
 * Loads the paginated pokemon list into the redux store.
 * @param {{ page: number }} params
 */
export function usePokemonList({ page }) {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.pokemons);

  useEffect(() => {
    const offset = (page - 1) * PAGE_SIZE;
    dispatch(clearList());
    dispatch(fetchPokemonList({ offset, limit: PAGE_SIZE }));
  }, [dispatch, page]);

  return {
    pokemons: list,
    isLoading: status === 'loading',
    error,
  };
}
