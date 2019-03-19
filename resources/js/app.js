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
import Promo from "./views/promo"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
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

  render() {
    return (
      
      <Router>
        <>
        <a href="#" className="djingo">
        <img src="/img/svg/help.svg" />
        </a>
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
          <Route path="/contact" exact component={Contact} />
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
          <Route path="/comptes" exact component={Comptes} />
          <Route path="/register" exact component={Register} />
          <Route path="/promo" exact component={Promo} />
        </>
      </Router>
    );
  }
}

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
