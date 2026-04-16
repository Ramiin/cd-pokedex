import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../Pagination';

describe('Pagination', () => {
  it('disables Previous on first page', () => {
    render(<Pagination currentPage={1} totalPages={10} onChange={vi.fn()} />);
    expect(screen.getByRole('button', { name: /previous/i })).toBeDisabled();
  });

  it('disables Next on last page', () => {
    render(<Pagination currentPage={10} totalPages={10} onChange={vi.fn()} />);
    expect(screen.getByRole('button', { name: /next/i })).toBeDisabled();
  });

  it('calls onChange with next page number when Next clicked', () => {
    const onChange = vi.fn();
    render(<Pagination currentPage={3} totalPages={10} onChange={onChange} />);
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    expect(onChange).toHaveBeenCalledWith(4);
  });

  it('calls onChange when input changes', () => {
    const onChange = vi.fn();
    render(<Pagination currentPage={1} totalPages={10} onChange={onChange} />);
    fireEvent.change(screen.getByRole('spinbutton'), { target: { value: '7' } });
    expect(onChange).toHaveBeenCalledWith(7);
  });
});
