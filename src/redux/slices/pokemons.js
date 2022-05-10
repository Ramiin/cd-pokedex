import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios'

export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState: {
        allPokemon: [],
        uniquePokemon:[],
        prueba: ''
    },
    reducers: {
        setMsgPrueba : (state, action)=>{
            state.prueba = 'Funciona redux'
        }
    }
});

export const {setMsgPrueba} = pokemonSlice.actions

export default pokemonSlice.reducer;

export const setPrueba = (msj)=>{
    return (dispatch)=>{
        dispatch(setMsgPrueba(msj))
    }
}