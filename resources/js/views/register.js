import React from "react";
import { Link } from "react-router-dom";

export default class Register extends React.Component {

  registerUser(name, email, password) {

    var formData = new FormData(); 
    formData.append("password", password);
    formData.append("email", email);
    formData.append("name", name);
  
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
        }
      })
      .catch(error => {
        alert("An Error Occured!" + error);
        console.log(`${formData} ${error}`);
      });
  };

  handleLogin(e) {
    e.preventDefault();

    registerUser(_name.value, _email.value, _password.value);
  };

  render() {
    return (
      <div id="main">
        <form id="login-form" action="" onSubmit={this.handleLogin} method="post">
          <h3 style={{ padding: 15 }}>Register Form</h3>
          <input autoComplete="off" id="email-input" name="email" type="text" className="center-block" placeholder="Name" />
          <input autoComplete="off" id="email-input" name="email" type="text" className="center-block" placeholder="email" />
          <input autoComplete="off" id="password-input" name="password" type="password" className="center-block" placeholder="password" />
          <button type="submit" className="landing-page-btn center-block text-center" id="email-login-btn" href="#facebook" >
            Register
          </button>
  
          <Link to="/login">
            Login
          </Link>
        </form>
      </div>
    );
  }
};