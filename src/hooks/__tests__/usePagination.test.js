import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { usePagination } from '../usePagination';
import { TOTAL_PAGES } from '../../config/constants';

describe('usePagination', () => {
  it('starts at page 1 by default', () => {
    const { result } = renderHook(() => usePagination());
    expect(result.current.page).toBe(1);
    expect(result.current.totalPages).toBe(TOTAL_PAGES);
  });

  it('nextPage increments', () => {
    const { result } = renderHook(() => usePagination(1));
    act(() => result.current.nextPage());
    expect(result.current.page).toBe(2);
  });

  it('prevPage does not go below 1', () => {
    const { result } = renderHook(() => usePagination(1));
    act(() => result.current.prevPage());
    expect(result.current.page).toBe(1);
  });

  it('setPage clamps to totalPages when too large', () => {
    const { result } = renderHook(() => usePagination(1));
    act(() => result.current.setPage(TOTAL_PAGES + 50));
    expect(result.current.page).toBe(TOTAL_PAGES);
  });

  it('setPage clamps to 1 when too small', () => {
    const { result } = renderHook(() => usePagination(5));
    act(() => result.current.setPage(-10));
    expect(result.current.page).toBe(1);
  });

  it('setPage resets to 1 when given NaN', () => {
    const { result } = renderHook(() => usePagination(5));
    act(() => result.current.setPage('not a number'));
    expect(result.current.page).toBe(1);
  });
});
