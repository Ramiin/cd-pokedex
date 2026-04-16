import PropTypes from 'prop-types';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-message" role="alert">
      <p>{message}</p>
      {onRetry && (
        <button type="button" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func,
};
