import React from "react";
import bootstrap from "bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="nav-container">
        <NavLink
         to="/"
         className="home-link"
          >
          Home
        </NavLink>
        <NavLink
          to="/About"
          className="about-link"
          >
          About me
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
    </nav>
  );
};

export default Navbar;
