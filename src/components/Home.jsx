import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Searchbar from "./Searchbar";
import { chargeAllPokemons } from "../redux/slices/pokemons";
import PokeCard from "./PokeCard";

export default function Home() {

    let dispatch= useDispatch()
    useEffect(() => {   
        dispatch(chargeAllPokemons(0, 9))
    }, [dispatch])
    
    let {allPokemon: currentPokemons} = useSelector(state => state.pokemons)



    //PAGINATION VARS
  let [currentPage, setCurrentPage] = useState(1);
  let cardsInPage = 9;

  const lastIndex = currentPage * cardsInPage;
  const firstIndex = lastIndex - cardsInPage;
  const cardsShowed = (function () {
    if (currentPokemons?.length === 0) return currentPokemons; //Si no hay proveedores para mostrar
    else return currentPokemons?.slice(firstIndex, lastIndex); //Dividimos el array original con los proveedores a mostrar
  })();

  const setPagina = (num) => {
    setCurrentPage(num);
  };
  return (
    <>
      <section className="container">
        <Searchbar />
      </section>

      <section className="cards-container">
          {currentPokemons?.map(el=>{
              let dataToRender = {
                image: el.sprites.other['official-artwork'].front_default, 
                name: el.name, 
                hp: el.stats[0].base_stat, 
                experience: el.base_experience, 
                attack: el.stats[1].base_stat, 
                special: el.stats[2].base_stat,
                defense: el.stats[3].base_stat
            }
              return <PokeCard pokemon={dataToRender} />
          })}
      </section>
    </>
  );
}
