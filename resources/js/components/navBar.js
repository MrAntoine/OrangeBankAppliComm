import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {

  constructor(props) {
    super(props)
  }

  handleLogout(e) {
    e.preventDefault()
    this.props.logout();
  }

  render() {

    let links;
    if(this.props.isLoggedIn === false) links =
      <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </>
    else links =
      <>
        <li><Link to="/">Home</Link></li>
        <li><a href="#" onClick={(e) => this.handleLogout(e)}>Logout</a></li>
      </>

    return (

      <nav>
        <ul>
          {links}
        </ul>
      </nav>

    );
  }
};