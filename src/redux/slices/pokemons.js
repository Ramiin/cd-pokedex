import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios'

export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState: {
        allPokemon: [],
        uniquePokemon:{},
    },
    reducers: {
        setUniquePokemon: (state, action)=>{
            state.uniquePokemon = action.payload
        }
    }
});

export const {setUniquePokemon} = pokemonSlice.actions

export default pokemonSlice.reducer;

export const setRandom = ()=>{
    let min= 1;
    let max= 1126;
    let randomPoke= Math.floor(Math.random() * (max - min + 1) + min);

    return async (dispatch)=>{
        let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPoke}`).data
        dispatch(setUniquePokemon(pokemon))
    }
}