import React, { Component } from "react";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <div className="rmdb-header">
        <div className="rmdb-header-content">
          <img
            className="rmdb-logo"
            src="./images/reactMovie_logo.png"
            alt="rmdb-log"
          />
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
