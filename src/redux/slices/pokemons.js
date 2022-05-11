import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios'

export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState: {
        allPokemon: [],
        allPokemonBackup:[],
        uniquePokemon:{},
        allTypes: []
    },
    reducers: {
        setUniquePokemon: (state, action)=>{
            state.uniquePokemon = action.payload
        },
        clearActualPokemon: (state, action)=>{
            state.uniquePokemon = {}
        },
        setAllTypes: (state, action) =>{
            state.allTypes = action.payload
        },
        setAllPokemons: (state, action) =>{
            state.allPokemon = action.payload
            state.allPokemonBackup = action.payload
        },
    }
});

export const {setUniquePokemon, clearActualPokemon, setAllTypes, setAllPokemons} = pokemonSlice.actions

export default pokemonSlice.reducer;

export const setRandomPoke = ()=>{
    let min= 1;
    let max= 898;
    let randomPoke= Math.floor(Math.random() * (max - min + 1) + min);
    return async (dispatch)=>{
        let pokemon = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPoke}`)).data
        dispatch(setUniquePokemon(pokemon))
    }
}

export const chargeAllPokemons = (offset, limit)=>{
    return async (dispatch)=>{
        let pokemonsName = (await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)).data
        let pokemonsEndpoint = pokemonsName.results.map(el=>axios.get(`${el.url}`));
        Promise.all(pokemonsEndpoint).then(res=>{
            let pokemonsData= res.map(el=> el.data)
            dispatch(setAllPokemons(pokemonsData))
        })
        

    }
}

export const clearUniquePokemon = ()=>{
    return (dispatch)=>{
        dispatch(clearActualPokemon())
    }
}

export const chargeAllTypes = ()=>{
    return async (dispatch)=>{
        let pokemon = (await axios.get(`https://pokeapi.co/api/v2/type/`)).data
        dispatch(setUniquePokemon(pokemon))
    }
}