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
                style={{borderRadius: "50%", width: "100px!important" }}
              />
            </div>
            <div className="info-details" style={{minHeight:'550px'}}>
              <h1 style={{ marginTop: "90px" }}>Oscar Rodriguez</h1>
              <hr />
              <div className="info-stats">
                <p>MADE WITH:</p>
                <p>{"REACT & REDUX"} </p>
                <p>REACT HOOKS </p>
                <p>JAVASCRIPT </p>
                <p>LESS</p>
                <p>HTML</p>
                <p>POKEMON API</p>

              </div>
              <div className="half" style={{marginTop:'0px'}}>
                <div className="types-list">
                  <h3>TYPES</h3>

                  <span className="types poison">Frontend </span>
                  <span className="types ghost">Backend</span>
                </div>

                <div className="about">
                  <h3>ABOUT ME</h3>
                  <p>
                    Im' a{" "}
                    {
                      "Full Stack Web Developer, my technologies stack: Javascript | React & Redux | Node js | HTML | CSS | Express | MongoDB | PostgreSQL | Sequelize | SCRUM | Git - Github"
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
