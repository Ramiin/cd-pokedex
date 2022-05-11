import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Searchbar from "./Searchbar";
import { chargeAllPokemons, clearAllPokemons } from "../redux/slices/pokemons";
import PokeCard from "./PokeCard";
import Pagination from "./Pagination";

export default function Home() {
  let { allPokemon: currentPokemons } = useSelector((state) => state.pokemons);

  //PAGINATION VARS
  let [currentPage, setCurrentPage] = useState(1);
  let cardsInPage = 6;
  let apiOffset = currentPage*cardsInPage;
  ////

  let dispatch= useDispatch()
  useEffect(() => {   
      dispatch(clearAllPokemons())
      dispatch(chargeAllPokemons(apiOffset===6 ? 0 : apiOffset, cardsInPage))
  }, [dispatch, currentPage])
///PAGINATION VARS
  const lastIndex = currentPage * cardsInPage;
  const firstIndex = lastIndex - cardsInPage;
  const cardsShowed = (function () {
    if (currentPokemons?.length === 0)
      return currentPokemons; //Si no hay proveedores para mostrar
    else return currentPokemons?.slice(firstIndex, lastIndex); //Dividimos el array original con los proveedores a mostrar
  })();

  const setPagina = (num) => {
    setCurrentPage(num);
  };
  ///////
  return (
    <>
      <section className="container">
        <Searchbar setPagina={setPagina}/>
      </section>

      <section>
        <Pagination
          currentPage={currentPage}
          setPagina={setPagina}
          cardsInPage={cardsInPage}
          totalPokemons={1122}
          currentPokemons={currentPokemons.length}
        />
      </section>

      <section className="cards-container">
        {currentPokemons?.map((el) => {
          let dataToRender = {
            id: el.id,
            image: el.sprites.other["official-artwork"].front_default,
            name: el.name,
            hp: el.stats[0].base_stat,
            experience: el.base_experience,
            attack: el.stats[1].base_stat,
            special: el.stats[2].base_stat,
            defense: el.stats[3].base_stat,
          };
          return <PokeCard pokemon={dataToRender} />;
        })}
      </section>
    </>
  );
}
