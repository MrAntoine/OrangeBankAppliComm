/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/navBar";

import Login from "./views/login";
import Register from "./views/register";
import Home from "./views/home";
import Contact from "./views/contact";
import Accueil from "./views/accueil";
import Comptes from "./views/comptes";
import Compte from "./views/compte";
import Promo from "./views/promo"
import Transferts from "./views/transfert"
import Faq from "./views/faq"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
      djingo: false,
      option: null
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    let state = localStorage["appState"];
    if (state) {
      let AppState = JSON.parse(state);
      console.log(AppState);
      this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState });
    }
  }

  login(appState) {
    this.setState({
      isLoggedIn: appState.isLoggedIn,
      user: appState.user
    });
  }

  logout() {
    let appState = {
      isLoggedIn: false,
      user: {}
    };

    localStorage["appState"] = JSON.stringify(appState);
    this.setState(appState);
  }

  djingo() {
    this.setState({
      djingo: !this.state.djingo,
      option: null
    })
  }

  render() {
    return (
      
      <Router>
        <>
        <div id="djingo" onClick={() => this.djingo()}>
          <span className="djingo">
            {/* <img src="/img/djingo-button.png" /> */}
            {/* <img src="/img/svg/account-question.svg" alt="Aide"/> */}
            <img src="/img/svg/djingo-icon.svg" className="icon" alt="Djingo"/>
          </span>
        </div>
        <div id="djingo-display" className={this.state.djingo.toString()} >
          <div>
            <div>
              <img src="/img/svg/djingo-icon.svg" />
              <p className="inline-p">Je peux t'aider ?</p>
            </div>
            <span className="btn white cyan" onClick={() => this.setState({
              option: 1
            })}>
              Poser une question <img src="/img/svg/microphone.svg" />
            </span>
            {
              this.state.option
              ? (
                <>
                <form>
                  <input type="text" />
                  <button className="btn blue">Envoyer</button>
                </form>
                  <span onClick={() => this.setState({
                    option: null
                  })}>
                    <img src="/img/svg/arrow_left.svg" alt="Retour" />
                  </span>
                </>
              )
              : (
                <>
                  <span className="btn white cyan">
                    Je ne comprends pas cette page
                  </span>
                  <Link to="/questions" className="btn white cyan" onClick={() => this.setState({
                    djingo: false
                  })}>
                    {/* <span > */}
                      Questions récurrentes
                    {/* </span> */}
                  </Link>
                </>
              )
            }
          </div>
        </div>
          {
            this.state.isLoggedIn ?
              <Navbar isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
            :
              null
          }
          {
            this.state.isLoggedIn ?
              <Route path="/" exact component={Accueil} />
            :
              <Route path="/" exact component={Home} />
          }
            <Route
              path="/contact"
              render={props => (
                <Contact {...props} isLoggedIn={this.state.isLoggedIn} />
              )}
            />
          {
            this.state.isLoggedIn ?
              <Route path="/login" component={Accueil} />
            :
              <Route
                path="/login"
                render={props => (
                  <Login {...props} login={this.login} />
                )}
              />
          }
          <Route path="/compte" exact component={Compte} />
          <Route path="/comptes" exact component={Comptes} />
          <Route path="/register" exact component={Register} />
          <Route path="/promo" exact component={Promo} />
          <Route path="/transfert" exact component={Transferts} />
          <Route path="/questions" exact component={Faq} />
        </>
      </Router>
    );
  }
}

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
