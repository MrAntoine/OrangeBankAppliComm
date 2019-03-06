
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './views/login'
import Home from './views/home'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    };
  }

  componentDidMount() {
    var formData = new FormData(); 
    formData.append("password", "AZER");
    formData.append("email", "mail");
    formData.append("name", "TCM");

    axios
      .post("http://localhost:8000/api/user/register", formData)
      .then(response => {
        console.log(response);
        return response;
      })
      .then(json => {
        if (json.data.success) {
          alert(`Registration Successful!`);

          let userData = {
            name: json.data.data.name,
            id: json.data.data.id,
            email: json.data.data.email,
            auth_token: json.data.data.auth_token,
            timestamp: new Date().toString()
          };
          let appState = {
            isLoggedIn: true,
            user: userData
          };
          // save app state with user date in local storage
          localStorage["appState"] = JSON.stringify(appState);
          this.setState({
            isLoggedIn: appState.isLoggedIn,
            user: appState.user
          });
        } else {
          alert(`Registration Failed!`);
          // $("#email-login-btn")
          //   .removeAttr("disabled")
          //   .html("Register");
        }
      })
      .catch(error => {
        alert("An Error Occured!" + error);
        console.log(`${formData} ${error}`);
        console.log(error.response)
        // $("#email-login-btn")
        //   .removeAttr("disabled")
        //   .html("Register");
});

    //
    //
    // LOGIN AUTO

    // axios
    //   .post("http://localhost:8000/api/user/login/", {email: "Monpseudo", password: "Monmdp"})
    //   .then(response => {
    //     console.log(response);
    //     return response;
    //   })
    //   .then(json => {
    //     if (json.data.success) {
    //       alert("Login Successful!");

    //       let userData = {
    //         name: json.data.data.name,
    //         id: json.data.data.id,
    //         email: json.data.data.email,
    //         auth_token: json.data.data.auth_token,
    //         timestamp: new Date().toString()
    //       };
    //       let appState = {
    //         isLoggedIn: true,
    //         user: userData
    //       };
    //       // save app state with user date in local storage
    //       localStorage["appState"] = JSON.stringify(appState);
    //       this.setState({
    //         isLoggedIn: appState.isLoggedIn,
    //         user: appState.user
    //       });
    //     } else alert("Login Failed!");

    //     // $("#login-form button")
    //     //   .removeAttr("disabled")
    //     //   .html("Login");
    //   })
    //   .catch(error => {
    //     alert(`An Error Occured! ${error}`);
    //     // $("#login-form button")
    //     //   .removeAttr("disabled")
    //     //   .html("Login");
    //   });
  }

  render() {
    return (
      <AppRouter />
    )
  }
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={Login} />
        <Route path="/users/" component={Login} />
      </div>
    </Router>
  );
}

export default AppRouter;
// console.log(store.getState())
  if (document.getElementById('app')) {
    ReactDOM.render(
    <App/>, document.getElementById('app'));
  }