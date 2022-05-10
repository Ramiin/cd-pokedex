import { configureStore } from '@reduxjs/toolkit'
import pokemons from '../slices/pokemons'

export default configureStore({
    reducer: {
        pokemons
    }
})