import PropTypes from 'prop-types';

export default function LoadingSpinner({ label = 'Loading...' }) {
  return (
    <div className="loading-spinner" role="status" aria-live="polite">
      <div className="spinner" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}

LoadingSpinner.propTypes = {
  label: PropTypes.string,
};
