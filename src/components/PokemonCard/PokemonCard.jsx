import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

/**
 * Displays a single pokemon summary card. Clicking the image navigates to the details page.
 */
export default function PokemonCard({ pokemon }) {
  const navigate = useNavigate();
  const { id, image, name, hp, attack, defense, special, experience } = pokemon;

  return (
    <div className="card">
      <div className="poke-img-container">
        {/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */}
        <img
          src={image}
          alt={name}
          onClick={() => navigate(`/details/${id}`)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') navigate(`/details/${id}`);
          }}
          role="button"
          tabIndex={0}
        />
        {/* eslint-enable jsx-a11y/no-noninteractive-element-to-interactive-role */}
      </div>
      <div className="info">
        <h1>{name}</h1>
        <p>Health: {hp}</p>
        <p>Attack: {attack}</p>
        <p>Defense: {defense}</p>
        <p>Experience: {experience}</p>
        <p>Special: {special}</p>
      </div>
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    hp: PropTypes.number.isRequired,
    attack: PropTypes.number.isRequired,
    defense: PropTypes.number.isRequired,
    special: PropTypes.number.isRequired,
    experience: PropTypes.number.isRequired,
  }).isRequired,
};
