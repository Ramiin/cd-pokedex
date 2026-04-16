import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Searchbar from '../Searchbar';

describe('Searchbar', () => {
  it('submits normalized search term', () => {
    const onSearch = vi.fn();
    render(<Searchbar onSearch={onSearch} onReset={vi.fn()} />);
    fireEvent.change(screen.getByLabelText(/search pokemon by name/i), {
      target: { value: '  PIKAchu  ' },
    });
    fireEvent.click(screen.getByRole('button', { name: /search/i }));
    expect(onSearch).toHaveBeenCalledWith('pikachu');
  });

  it('does not submit empty search', () => {
    const onSearch = vi.fn();
    render(<Searchbar onSearch={onSearch} onReset={vi.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: /search/i }));
    expect(onSearch).not.toHaveBeenCalled();
  });

  it('calls onReset when Refresh is clicked', () => {
    const onReset = vi.fn();
    render(<Searchbar onSearch={vi.fn()} onReset={onReset} />);
    fireEvent.click(screen.getByText(/refresh all/i));
    expect(onReset).toHaveBeenCalled();
  });
});
