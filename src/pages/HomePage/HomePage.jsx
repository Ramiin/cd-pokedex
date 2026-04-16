import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PokemonCard from '../../components/PokemonCard';
import Searchbar from '../../components/Searchbar';
import Pagination from '../../components/Pagination';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import { usePagination } from '../../hooks/usePagination';
import { usePokemonList } from '../../hooks/usePokemonList';
import { searchPokemonByName, clearList } from '../../store/slices/pokemonsSlice';
import { mapPokemonToCard } from '../../utils/pokemonMapper';

export default function HomePage() {
  const dispatch = useDispatch();
  const { page, setPage, totalPages } = usePagination(1);
  const [isSearching, setIsSearching] = useState(false);
  const { pokemons, isLoading, error } = usePokemonList({ page });

  const handleSearch = (name) => {
    setIsSearching(true);
    setPage(1);
    dispatch(clearList());
    dispatch(searchPokemonByName(name));
  };

  const handleReset = () => {
    setIsSearching(false);
    setPage(1);
  };

  return (
    <>
      <section className="container">
        <Searchbar onSearch={handleSearch} onReset={handleReset} />
      </section>

      {!isSearching && (
        <section>
          <Pagination currentPage={page} totalPages={totalPages} onChange={setPage} />
        </section>
      )}

      <section className="cards-container">
        {isLoading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} onRetry={handleReset} />}
        {!isLoading &&
          !error &&
          pokemons.map((raw) => <PokemonCard key={raw.id} pokemon={mapPokemonToCard(raw)} />)}
      </section>
    </>
  );
}
