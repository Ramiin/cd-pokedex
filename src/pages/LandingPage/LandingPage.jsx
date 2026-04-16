import { Link } from 'react-router-dom';
import PokemonCard from '../../components/PokemonCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import { useRandomPokemon } from '../../hooks/useRandomPokemon';
import { mapPokemonToCard } from '../../utils/pokemonMapper';
import fingerPointing from '../../assets/images/finger-pointing-down.gif';

export default function LandingPage() {
  const { pokemon, isLoading, error } = useRandomPokemon();
  const cardData = pokemon ? mapPokemonToCard(pokemon) : null;

  return (
    <>
      <div className="hero">
        <div className="main-message">
          <h1>You&apos;re about to enter the best Pokemon app.</h1>
          <h4>Are you ready?</h4>
          <Link to="/home" className="btn-main">
            GET STARTED!
          </Link>
        </div>
      </div>

      <div className="container">
        <h4 style={{ marginBottom: 0, marginTop: 30 }}>Do you already know this pokemon?</h4>
        <img src={fingerPointing} alt="" aria-hidden="true" height="50" />
        {isLoading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {cardData && <PokemonCard pokemon={cardData} />}
      </div>
    </>
  );
}
