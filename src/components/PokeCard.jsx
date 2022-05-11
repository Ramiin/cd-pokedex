import React from "react";

export default function PokeCard(props) {

  let { image, name, hp, experience, attack, special, defense } = props.pokemon;
  return (
    <>
      <div className="card">
            <div className="poke-img-container">
            <img src={image} alt={name} />
            </div>
            <div className="info">
            <h1>{name}</h1>

            <p>Health: {hp}</p>
            <p>Attack: {attack}</p>
            <p>Defense: {defense}</p>
            <p>Experience: {experience}</p>
            <p>Special: {special}</p>
            <p>{}</p>
            </div>
      </div>
    </>
  );
}
