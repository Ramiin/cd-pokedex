import React, {useEffect} from "react";
import PokeCard from "./PokeCard";
import {useDispatch, useSelector} from 'react-redux';
import { clearUniquePokemon, setRandomPoke } from "../redux/slices/pokemons";
import fingerPointing from '../utils/img/finger-pointing-down.gif'

export default function LandingPage(props) {

    let dispatch = useDispatch();
    let {uniquePokemon} = useSelector(state => state.pokemons);
    let pokeDataToRender;

    useEffect(() => {
        dispatch(clearUniquePokemon())
        dispatch(setRandomPoke());
    }, [dispatch]);

    
    if(uniquePokemon.name){
    pokeDataToRender = {
        image: uniquePokemon.sprites.other['official-artwork'].front_default, 
        name: uniquePokemon.name, 
        hp: uniquePokemon.stats[0].base_stat, 
        experience: uniquePokemon.base_experience, 
        attack: uniquePokemon.stats[1].base_stat, 
        special: uniquePokemon.stats[2].base_stat,
        defense: uniquePokemon.stats[3].base_stat
    }
     console.log(pokeDataToRender)
    }

  return (
    <>
      <div className="hero">
        <div className="main-message">
          <h1>You're about to enter to the best Pokemon app.</h1>

          <h4>Are you ready?</h4>

          <a href="/home" className='btn-main'>GET STARTED!</a>
        </div>
      </div>

      <div className='container'>
        <h4 style={{marginBottom:'0px', marginTop:'30px'}}>Do you already know this pokemon?</h4>
        <img src={fingerPointing} alt="finger-pointing" height='50px'/>
        {pokeDataToRender?.name ? <PokeCard pokemon = {pokeDataToRender}/> : 'loading'}
      </div>
    </>
  );
}
