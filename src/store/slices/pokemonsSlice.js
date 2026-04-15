import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getPokemonList,
  getPokemonById,
  getPokemonSpecies,
  searchPokemon,
} from '../../services/pokemonService';
import { RANDOM_POKEMON_ID_MIN, RANDOM_POKEMON_ID_MAX } from '../../config/constants';

const initialState = {
  list: [],
  current: null,
  description: '',
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchPokemonList = createAsyncThunk('pokemons/fetchList', async ({ offset, limit }) =>
  getPokemonList({ offset, limit })
);

export const fetchPokemonById = createAsyncThunk('pokemons/fetchById', async (idOrName) =>
  getPokemonById(idOrName)
);

export const fetchRandomPokemon = createAsyncThunk('pokemons/fetchRandom', async () => {
  const randomId =
    Math.floor(Math.random() * (RANDOM_POKEMON_ID_MAX - RANDOM_POKEMON_ID_MIN + 1)) +
    RANDOM_POKEMON_ID_MIN;
  return getPokemonById(randomId);
});

export const fetchPokemonDescription = createAsyncThunk(
  'pokemons/fetchDescription',
  async (idOrName) => {
    const species = await getPokemonSpecies(idOrName);
    return species.flavor_text_entries?.[0]?.flavor_text ?? '';
  }
);

export const searchPokemonByName = createAsyncThunk('pokemons/search', async (name) =>
  searchPokemon(name)
);

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    clearList: (state) => {
      state.list = [];
    },
    clearCurrent: (state) => {
      state.current = null;
      state.description = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchPokemonList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchPokemonById.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(fetchRandomPokemon.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(fetchPokemonDescription.fulfilled, (state, action) => {
        state.description = action.payload;
      })
      .addCase(searchPokemonByName.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(searchPokemonByName.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = [action.payload];
      })
      .addCase(searchPokemonByName.rejected, (state, action) => {
        state.status = 'failed';
        state.error = 'No pokemon found with that name.';
        console.warn('[pokemonsSlice] search failed:', action.error.message);
      });
  },
});

export const { clearList, clearCurrent } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
