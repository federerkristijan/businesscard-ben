import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/logo2.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="nav-container">
        <div className="nav-logo">
        <NavLink
         to="/"
         className="home-link"
          >
          <img src={Logo} alt="logo" />
        </NavLink>
        </div>
        <div className="nav-links">
        <NavLink
          to="/About"
          className="about-link"
          >
          Bio
        </NavLink>
        <NavLink
          to="/Work"
          className="work-link"
          >
          How I work
        </NavLink>
        <NavLink
          to="/Contact"
          className="contact-link"
          >
          Contact me
        </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
