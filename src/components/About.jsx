import React from "react";
import Ozqui from "../utils/img/Ozqui.jpg";

export default function About() {
  return (
    <>
      <>
        <div className="container">
          <div className="details">
            <div className="img-details">
              <img
                src={Ozqui}
                alt="Ozcar Rdz"
                className="about"
                style={{ borderRadius: "50%", maxHeight: "250px!important" }}
              />
            </div>
            <div className="info-details">
              <h1 style={{ marginTop: "90px" }}>Oscar Rodriguez</h1>
              <hr />
              <div className="info-stats">
                <p>MADE WITH:</p>
                <p>{"REACT & REDUX"} </p>
                <p>REACT HOOKS </p>
                <p>JAVASCRIPT </p>
                <p>LESS</p>
                <p>POKEMON API</p>

              </div>
              <div className="half">
                <div className="types-list">
                  <h3>TYPES</h3>

                  <span className="types poison">Frontend </span>
                  <span className="types poison">Backend</span>
                </div>

                <div className="about">
                  <h3>ABOUT ME</h3>
                  <p>
                    Im' a{" "}
                    {
                      "Full Stack Web Developer, my technologies stack: Javascript | React & Redux | Node js | HTML | CSS | Express | MongoDB | PostgreSQL | Sequelize | Git - Github"
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
