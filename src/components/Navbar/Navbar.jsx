import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/logo2.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="nav-container">
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
          to="/about"
          className="about-link"
          >
          Bio
        </NavLink>
        <NavLink
          to="/work"
          className="work-link"
          >
          How I work
        </NavLink>
        <NavLink
          to="/events"
          className="events-link"
          >
          Events
        </NavLink>
        <NavLink
          to="/contact"
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
