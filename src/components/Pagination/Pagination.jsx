import PropTypes from 'prop-types';

/**
 * Pagination control backed by the usePagination hook on the caller side.
 */
export default function Pagination({ currentPage, totalPages, onChange }) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <nav aria-label="Pokemon list pagination">
      <ul className="pagination">
        <li>
          <button
            type="button"
            className={`first ${isFirstPage ? 'disabled' : ''}`}
            onClick={() => onChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            Previous
          </button>
        </li>
        <li>
          <input
            type="number"
            min={1}
            max={totalPages}
            value={currentPage}
            onChange={(e) => onChange(Number(e.target.value))}
            aria-label={`Page, currently ${currentPage} of ${totalPages}`}
          />
          <span className="page-indicator"> / {totalPages}</span>
        </li>
        <li>
          <button
            type="button"
            className={`second ${isLastPage ? 'disabled' : ''}`}
            onClick={() => onChange(currentPage + 1)}
            disabled={isLastPage}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
