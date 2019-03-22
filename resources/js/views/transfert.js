import React from "react";
import { Link } from "react-router-dom";

export default class Transferts extends React.Component {

  render() {
    return (
      <>
        <div className="header">
          <img src="/img/svg/Orange_logo.svg" />
          <h1>Transferts</h1>
        </div>
        <div className="container margin-top">
          <h1>Je fais un transfert de</h1>
          <h2>0,00 €</h2>
          
          <h1>Du compte :</h1>
          <ul className="comptes">
            <li>
                <div>
                  <span>CPT DEPOT PART</span>
                  <div className="infos">
                    <span className="numero">N°09876543210</span>
                    <span className="argent">160.55€</span>
                  </div>
                </div>
            </li>
          </ul>

          <h1>Vers le compte :</h1>
          <ul className="comptes">
          <li>
              <div>
                <span>LIVRET JEUNE</span>
                <div className="infos">
                  <span className="numero">N°67890098765</span>
                  <span className="argent">142,33€</span>
                </div>
              </div>
          </li>
        </ul>      


        </div>
      </>
    )
  }
}