import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Search input. Calls `onSearch` with the trimmed, lowercased term on submit.
 * Calls `onReset` when the "Refresh" button is clicked.
 */
export default function Searchbar({ onSearch, onReset }) {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalized = term.toLowerCase().trim();
    if (!normalized) return;
    onSearch(normalized);
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="searchbar"
        placeholder="Search pokemon by name.."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        aria-label="Search pokemon by name"
      />
      <button type="submit" aria-label="Search">
        🔍
      </button>
      <button
        type="button"
        className="refresh-btn"
        onClick={() => {
          setTerm('');
          onReset();
        }}
      >
        Refresh all
      </button>
    </form>
  );
}

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};
