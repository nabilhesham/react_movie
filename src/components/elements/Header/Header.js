import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <div className="rmdb-header">
        <div className="rmdb-header-content">
          <Link to="/">
            <img
              className="rmdb-logo"
              src="./images/reactMovie_logo.png"
              alt="rmdb-log"
            />
          </Link>
          <img
            className="rmdb-tmdb-logo"
            src="./images/tmdb_logo.png"
            alt="tmdb-log"
          />
        </div>
      </div>
    );
  }
}

export default Header;
