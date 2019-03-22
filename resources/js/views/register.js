import React from "react";
import { Link } from "react-router-dom";

export default class Register extends React.Component {

  constructor(props) {
    super(props)
  }

  registerUser() {
    var formData = new FormData(); 
    formData.append("password", document.getElementById('password-input').value );
    formData.append("email", document.getElementById('email-input').value );
    formData.append("name", document.getElementById('name-input').value );
    // console.log(formData)

    axios
      .post("http://localhost:8000/api/user/register", formData)
      .then(response => {
        // console.log(response);
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

          localStorage["appState"] = JSON.stringify(appState);
          this.props.login(appState);

        } else {
          alert(`Registration Failed!`);
        }
      })
      .catch(error => {
        alert("An Error Occured!" + error);
        // console.log(error.response)
      });
  };

  handleRegistration(e) {
    e.preventDefault();
    this.registerUser();
  };

  render() {
    return (
      <>
        <form onSubmit={(e) => this.handleRegistration(e)} method="post">
          <input id="name-input" type="text" placeholder="Name" />
          <input id="email-input" type="text" placeholder="email" />
          <input id="password-input" type="password" placeholder="password" />
          <button type="submit">
            Register
          </button>
        </form>
      </>
    );
  }
};