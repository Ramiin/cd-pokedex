import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { chargeInfoPokemon, chargeResume } from "../redux/slices/pokemons";

export default function Details(){

    let {idPokemon} = useParams()
    let {uniquePokemon: pokemonToShow, resumePokemon} = useSelector((state) => state.pokemons);
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(chargeInfoPokemon(idPokemon))
        dispatch(chargeResume(idPokemon))
      }, [dispatch])
    

      
      if(pokemonToShow.name){
          let typesOfPokemon = pokemonToShow.types.map(el=>el.type.name)
          console.log(typesOfPokemon)

    return(
        <>
        <div className="container">
            <div className="details">
                <div className="img-details">
                    <img src={pokemonToShow.sprites.other["official-artwork"].front_default} alt="" />
                </div>
                <div className="info-details">
                    <h1>{pokemonToShow.name}</h1>
                    <hr />
                    <div className="info-stats">
                    <p>ATTACK: {pokemonToShow.stats[1].base_stat}</p>
                    <p>DEFENSE: {pokemonToShow.stats[2].base_stat}</p>
                    <p>HP: {pokemonToShow.stats[0].base_stat}</p>
                    <p>EXPERIENCE: {pokemonToShow.base_experience}</p>
                    <p>SPECIAL ATTACK: {pokemonToShow.stats[3].base_stat}</p>
                    <p>SPEED: {pokemonToShow.stats[5].base_stat}</p>
                    <p>HEIGHT: {pokemonToShow.height}</p>
                    </div>  
                   <div className="half">
                       <div className='types-list'>
                           <h3>TYPES</h3>

                           {typesOfPokemon?.map(el=>{
                               return <span className={`types ${el}`}>{el.toUpperCase()}</span>
                           })}
                       </div>

                       <div className='about'>
                           <h3>ABOUT {pokemonToShow.name.toUpperCase()}</h3>
                           <p>{resumePokemon}</p>
                       </div>
                   </div>


                </div>
            </div>
        </div>
        </>
    )

      }


}