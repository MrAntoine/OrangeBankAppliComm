import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {

  render() {
    return (
      <div className="container margin-top">
        <header>
          <img src="/img/svg/Orange_logo.svg" />
        </header>
        <h1>Orange Bank</h1>
        <p>
          Votre appli Orange Bank, c'est votre agence bancaire : vous réalisez toutes vos opérations,
          vous pilotez vos moyens de paiement et vous trouvez toutes les réponses à vos questions, sans attendre.
        </p>
        <Link to="/login" className="btn">
          Se connecter
        </Link>
        <Link to="/contact" className="btn white">
          Contact
        </Link>
        
      </div>
    )
  }

}