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

    let links =
      <>
        <li>
          <Link to="/" className="nav-btn">
            <img src="/img/svg/home.svg" />
            <span>Accueil</span>
          </Link>
        </li>
        <li>
          <Link to="/comptes" className="nav-btn">
            <img src="/img/svg/account-card-details.svg" />
            <span>Comptes</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-btn">
            <img src="/img/svg/currency-eur.svg" />
            <span>Transfert</span>
          </Link>
        </li>
        <li>
          <Link to="/promo" className="nav-btn">
            <img src="/img/svg/percent.svg" />
            <span>Promotions</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-btn">
            <img src="/img/svg/phone-in-talk.svg" />
            <span>Contacts</span>
          </Link>
        </li>
        {/* <li><a href="#" onClick={(e) => this.handleLogout(e)}>Logout</a></li> */}
      </>

    return (

      <nav className="navigation">
        <ul>
          {links}
        </ul>
      </nav>

    );
  }
};