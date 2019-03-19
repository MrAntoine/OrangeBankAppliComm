import React from "react";
import { Link } from "react-router-dom";

export default class Comptes extends React.Component {

  render() {
    return (
      <>
      <div className="header">
        <img src="/img/svg/Orange_logo.svg" />
        <h1>Mes comptes</h1>
      </div>
      <div className="container">
        {/* <img src="/img/svg/graph courant.svg" className="illustration" /> */}
        <section className="graphiques">
          <div className="repere">
            <span>0 €</span>
            <span>2000 €</span>
          </div>
          <div className="rec first">
            <span>1654.76 €</span>
            <span>CPT DEPOT/COMMUN</span>
          </div>
          <div className="rec second">
            <span>160.55 €</span>
            <span>CPT DEPOT PART</span>
          </div>
        </section>
        <h2>Comptes courants <span className="argent">1815.31€</span></h2>
        <ul className="comptes">
          <li>
            <Link to="/">
              <div>
                <span>CPT DEPOT PART</span>
                <div className="infos">
                  <span className="numero">N°09876543210</span>
                  <span className="argent">160.55€</span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div>
                <span>CPT DEPOT/COMMUN</span>
                <div className="infos">
                  <span className="numero">N°09876543210</span>
                  <span className="argent">1654,76€</span>
                </div>
              </div>
            </Link>
          </li>
        </ul>
        <h2>Livrets <span className="argent">164.66€</span></h2>
        <ul className="comptes">
          <li>
            <Link to="/">
              <div>
                <span>LIVRET JEUNE</span>
                <div className="infos">
                  <span className="numero">N°67890098765</span>
                  <span className="argent">142,33€</span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div>
                <span>LIVRET A</span>
                <div className="infos">
                  <span className="numero">N°65432109876</span>
                  <span className="argent">22,33€</span>
                </div>
              </div>
            </Link>
          </li>
        </ul>      
      </div>
      </>
    );
  }
}