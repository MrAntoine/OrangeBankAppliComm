import React from "react";
import { Link } from "react-router-dom";

export default class Promo extends React.Component {

  render() {
    return (
        <>
          <div className="header">
            <img src="/img/svg/Orange_logo.svg" />
            <h1>Mes promotions</h1>
          </div>
          <div className="container margin-top">
            <section className="graphiques">
              <h2>Découvrez les dernières promotions disponibles :</h2>
              <div className="rec">
                <h3>Jusquà 120€ offert !</h3>
                <p>Soit <strong>80€</strong> de bienvenue
                  si utilisation de vos moyens de paiement + <strong>40€</strong> si vous êtes client Orange ou Sosh.</p>
              </div>
              <div className="rec">
                <h3>Iphone W pour 4€ !</h3>
                <p>Soit <strong>7996 €</strong> de reduction !<br/>Avec ce code : 17KSS7FJ9</p>
              </div>
            </section>
          </div>
        </>
    )
  }

}