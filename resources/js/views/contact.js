import React from "react";
import { Link } from "react-router-dom";

export default class Contact extends React.Component {

  render() {
    return (
        <>
        <div className="container">
            <header>
                <img src="/img/svg/Orange_logo.svg" />
            </header>
            <h1>Vous avez besoin d'aide?</h1>

            <p>Contactez directement notre service client</p>
            
            <div className="text_btn">Par téléphone :<span className="btn white">3900</span></div>
            <div className="text_btn">Par mail :<span className="btn white">contact@orange.fr</span></div>

            {/* <p>Accédez à votre compte</p> */}
            <Link to="/login" className="btn">
              Se connecter
            </Link>

            
            
        </div>
        </>
    )
  }

}