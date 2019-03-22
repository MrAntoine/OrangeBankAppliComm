import React from "react";
import { Link } from "react-router-dom";

export default class Accueil extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      welcome: true,
      questions: true
    }
  }

  componentDidMount() {
    let state = localStorage["state"]
    if(state) {
      let notif = JSON.parse(state);
      this.setState({
        welcome: notif.welcome,
        questions: notif.questions
      })
    }
  }

  closeW() {
    localStorage["state"] = JSON.stringify({
      welcome: false,
      questions: this.state.questions
    })
    this.setState({ welcome: false })
  }

  closeQ() {
    localStorage["state"] = JSON.stringify({
      welcome: this.state.questions,
      questions: false
    })
    this.setState({ questions: false })
  }

  render() {
    return (
      <>
        <div className="header">
          <img src="/img/svg/Orange_logo.svg" />
          <h1>Accueil Orange Bank</h1>
        </div>
        <div className="container margin-top">
        {this.state.welcome
          ? (
            <div className="rec" id="welcome">
              <img src="/img/svg/close.svg" alt="close" onClick={() => this.closeW()} />
              <img className="icon" style={{height: '4em'}} src="/img/svg/djingo-icon.svg" />
              <p>Bonjour Jean, je m'appelle <strong className="cyan">Djingo</strong> et je suis ton assistant personnel, tout est <strong className="cyan">bon</strong> pour nous aujourd'hui :-)</p>
            </div>  
          )
          :
          null
        }
        
        {
          this.state.questions
          ? (
            <>
            <h2>Vous avez besoin de quelque chose ?</h2>
          
            <div className="rec" id="questions">
              <img src="/img/svg/close.svg" alt="close" onClick={() => this.closeQ()} />
              <p>Poses moi toutes tes questions en cliquant sur le <strong className="cyan">cercle bleu</strong> en bas à droite de ton écran ;-)</p>
            </div>
            </>
          )
          : null
        }
          
          <h2>Résumé de votre compte</h2>
          <section className="graphiques">
            <Link to="/comptes">
              {/* <h3>Vos </h3> */}
              <div className="rec first">
                <span>Mes avoirs</span>
                <span>1979.97 €</span>
              </div>
            </Link>

            <Link to="/transfert">
              <h3>Vos derniers transferts</h3>
              <div className="rec">
                <p>50 €
                  <br />depuis <strong className="cyan">CPT DEPOT PART</strong>
                  <br />vers <strong className="cyan">CPT DEPOT/COMMUN</strong></p>
              </div>
            </Link>
          
            <Link to="/promo">
              <h3>Vos dernières promotions</h3>
              <div className="rec">
                <h4>Jusquà 120€ offert !</h4>
                <p>Soit <strong>80€</strong> de bienvenue
                  si utilisation de vos moyens de paiement + <strong>40€</strong> si vous êtes client Orange ou Sosh.</p>
              </div>
            </Link>

          
          </section>
        </div>
      </>
    )
  }
}