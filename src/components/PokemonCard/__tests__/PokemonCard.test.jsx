import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PokemonCard from '../PokemonCard';

const navigateMock = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return { ...actual, useNavigate: () => navigateMock };
});

const sample = {
  id: 25,
  name: 'pikachu',
  image: 'https://img/pikachu.png',
  hp: 35,
  attack: 55,
  defense: 40,
  special: 50,
  experience: 112,
};

describe('PokemonCard', () => {
  it('renders pokemon stats', () => {
    render(
      <MemoryRouter>
        <PokemonCard pokemon={sample} />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: 'pikachu' })).toBeInTheDocument();
    expect(screen.getByText('Health: 35')).toBeInTheDocument();
    expect(screen.getByText('Attack: 55')).toBeInTheDocument();
  });

  it('navigates to details on image click', () => {
    render(
      <MemoryRouter>
        <PokemonCard pokemon={sample} />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByAltText('pikachu'));
    expect(navigateMock).toHaveBeenCalledWith('/details/25');
  });
});
