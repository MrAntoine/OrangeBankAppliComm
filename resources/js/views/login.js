import React from "react";
import { Link } from "react-router-dom";

export default class Login extends React.Component {

  constructor(props) {
    super(props)
  }

  loginUser() {
    var formData = new FormData();
    formData.append("email", document.getElementById('email-input').value );
    formData.append("password", document.getElementById('password-input').value);

    axios
      .post("http://localhost:8000/api/user/login/", formData)
      .then(response => {
        // console.log(response);
        return response;
      })
      .then(json => {
        if (json.data.success) {
          alert("Login Successful!");

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

          localStorage["appState"] = JSON.stringify(appState);
          this.props.login(appState);

        } else alert("Login Failed!");
      })
      .catch(error => {
        alert(`An Error Occured! ${error}`);
      });
  };

  handleLogin(e) {
    e.preventDefault();
    this.loginUser();
  };

  render() {
    return (
      <>
        <form onSubmit={(e) => this.handleLogin(e)} method="post">
          <input id="email-input" type="text" placeholder="email" />
          <input id="password-input" type="password" placeholder="password" />
          <button type="submit">
            Login
          </button>
        </form>
      </>
    );
  }
};