import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import { usePokemonDetails } from '../../hooks/usePokemonDetails';
import { extractPokemonTypes } from '../../utils/pokemonMapper';

const STAT_LABELS = {
  0: 'HP',
  1: 'ATTACK',
  2: 'DEFENSE',
  3: 'SPECIAL ATTACK',
  4: 'SPECIAL DEFENSE',
  5: 'SPEED',
};

export default function DetailsPage() {
  const { idPokemon } = useParams();
  const { pokemon, description, isLoading, error } = usePokemonDetails(idPokemon);

  if (isLoading) return <LoadingSpinner label="Loading pokemon..." />;
  if (error) return <ErrorMessage message={error} />;
  if (!pokemon?.name) return null;

  const types = extractPokemonTypes(pokemon);
  const image = pokemon.sprites?.other?.['official-artwork']?.front_default;

  return (
    <div className="container">
      <div className="details">
        <div className="img-details">{image && <img src={image} alt={pokemon.name} />}</div>
        <div className="info-details">
          <h1>{pokemon.name}</h1>
          <hr />
          <div className="info-stats">
            <p>
              {STAT_LABELS[1]}: {pokemon.stats[1].base_stat}
            </p>
            <p>
              {STAT_LABELS[2]}: {pokemon.stats[2].base_stat}
            </p>
            <p>
              {STAT_LABELS[0]}: {pokemon.stats[0].base_stat}
            </p>
            <p>EXPERIENCE: {pokemon.base_experience}</p>
            <p>
              {STAT_LABELS[3]}: {pokemon.stats[3].base_stat}
            </p>
            <p>
              {STAT_LABELS[5]}: {pokemon.stats[5].base_stat}
            </p>
            <p>HEIGHT: {pokemon.height}</p>
          </div>
          <div className="half">
            <div className="types-list">
              <h3>TYPES</h3>
              {types.map((type) => (
                <span key={type} className={`types ${type}`}>
                  {type.toUpperCase()}
                </span>
              ))}
            </div>
            <div className="about">
              <h3>ABOUT {pokemon.name.toUpperCase()}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
