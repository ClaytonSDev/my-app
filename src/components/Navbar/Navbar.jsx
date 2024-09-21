import React from "react";

import logoimg from "../../assets/img/logobgaa.png";

import "./style.css";

export class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav id="navbar">
          <div className="nav-brand">
          <img src={logoimg} alt="" />
          <h1>Space Fligth News</h1>

          </div>
          
          <ul className="nav-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Treding</a>
            </li>
            <li>
              <a href="/">Categories</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
