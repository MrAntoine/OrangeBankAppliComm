import React from "react";
import { Link } from "react-router-dom";

export default class Contact extends React.Component {

  render() {
    return (
        <>
        <div className="header">
          <img src="/img/svg/Orange_logo.svg" />
          <h1>Accueil Orange Bank</h1>
        </div>
        <div className="container margin-top">
            <h2>Vous avez besoin d'aide?</h2>

            <div className="rec" id="welcome">
              <p>Contactez directement notre service client</p>
              <div className="text_btn">Par téléphone :<span className="btn white">3900</span></div>
              <div className="text_btn">Par mail :<span className="btn white">contact@orange.fr</span></div>
            </div>  

            <img src="/img/svg/djingo-icon.svg" class="icon"/>
            <p>Je peux également t'aider si tu en as besoin !</p>

            {/* <p>Accédez à votre compte</p> */}
            {
              this.props.isLoggedIn
              ? null
              : (
                <Link to="/login" className="btn">
                  Se connecter
                </Link>
              )
            }           
            
        </div>
        </>
    )
  }

}