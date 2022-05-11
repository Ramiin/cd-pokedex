import React from "react";
import {Link } from 'react-router-dom'

export default function Searchbar() {
  return (
    <>
      <form className="searchbar">
        <input
          type="text"
          id="searchbar"
          placeholder="Search by Pokemon name"
        />
        <button type="submit">🔍</button>
        <Link to='#'><p style={{margin: '5px'}}>Refresh all</p></Link>
      </form>
    </>
  );
}
