import React from "react";
import { Link } from "react-router-dom";

export default class Faq extends React.Component {
  render() {
    return (
        <>
        <div className="header">
          <img src="/img/svg/Orange_logo.svg" />
          <h1>Questions récurrentes</h1>
        </div>
        <div className="container margin-top">
        
        <div>
        <ul>
            <li className="rec">
            <a>
              Mes comptes
              </a>
              <ul>
                <li>C'est quoi ? </li>
                <li>Mes dépenses </li>
                <li>Historique</li>
              </ul>
            </li>
            <li className="rec">
              Prêts
              <ul> 
                <li>C'est quoi ?</li>
                <li>Suis-éligible ?</li> 
                <li>Faire un prêt</li>
              </ul>
            </li>
            <li className="rec">
              Placements
              <ul> 
                <li>C'est quoi ?</li>
                <li>Mes placements</li>
                <li>Faire un placement</li>
              </ul>
	          </li> 
          </ul>
        </div>
        </div>
        </>
    )
  }

}