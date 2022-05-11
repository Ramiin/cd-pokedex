import React from 'react';
import {useParams} from 'react-router-dom'

export default function Details(){

    let {idPokemon} = useParams()

    return(
        <>
        <h1>{idPokemon}</h1>
        </>


    )
}