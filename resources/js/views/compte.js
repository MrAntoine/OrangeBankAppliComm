import React from "react";
import { Link } from "react-router-dom";

export default class Compte extends React.Component {

  render() {
    return (
      <>
        <div className="header">
          <img src="/img/svg/Orange_logo.svg" />
          <h1>Détails de mon compte</h1>
        </div>
        <div className="container margin-top">
          <ul className="comptes">
            <li>
              {/* <Link to="/"> */}
                <div>
                  <span>CPT DEPOT PART</span>
                  <div className="infos">
                    <span className="numero">N°09876543210</span>
                    <span className="argent">160.55€</span>
                  </div>
                </div>
              {/* </Link> */}
            </li>
          </ul>
          <ul className="history">
            <li>
              <span>Dentiste</span>
              <span className="argent">160 €</span>
            </li>
          </ul>
        </div>
      </>
    );
  }
}