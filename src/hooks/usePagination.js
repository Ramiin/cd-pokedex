import { useCallback, useState } from 'react';
import { TOTAL_PAGES } from '../config/constants';

/**
 * Manages current page state with clamped navigation.
 * @param {number} [initialPage=1]
 */
export function usePagination(initialPage = 1) {
  const [page, setPage] = useState(initialPage);

  const goToPage = useCallback((next) => {
    const parsed = Number(next);
    if (Number.isNaN(parsed)) {
      setPage(1);
      return;
    }
    const clamped = Math.min(Math.max(parsed, 1), TOTAL_PAGES);
    setPage(clamped);
  }, []);

  const nextPage = useCallback(() => {
    setPage((current) => Math.min(current + 1, TOTAL_PAGES));
  }, []);

  const prevPage = useCallback(() => {
    setPage((current) => Math.max(current - 1, 1));
  }, []);

  return { page, setPage: goToPage, nextPage, prevPage, totalPages: TOTAL_PAGES };
}
