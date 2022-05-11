import React from "react";
import PokeCard from "./PokeCard";

export default function LandingPage(props) {
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
        <h4>Do you already know this pokemon?</h4>
        <PokeCard />
      </div>
    </>
  );
}
