import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { Link } from "react-router-dom";
import { searchPokemon, chargeAllPokemons, clearAllPokemons } from "../redux/slices/pokemons";

export default function Searchbar(props) {
  let dispatch = useDispatch();
  let [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value.toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.setPagina(1)
    dispatch(clearAllPokemons())
    dispatch(searchPokemon(search))
  }

  function refreshAll() {
    dispatch(clearAllPokemons())
    dispatch(chargeAllPokemons())
    
  }

  return (
    <>
      <form className="searchbar" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          id="searchbar"
          placeholder="Search pokemon by name.."
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">🔍</button>
        <Link to="#">
          <p style={{ margin: "5px" }} onClick={()=> refreshAll()}>Refresh all</p>
        </Link>
      </form>
    </>
  );
}
