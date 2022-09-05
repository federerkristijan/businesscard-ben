import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="nav-container">
        <div className="navlogo">
        <NavLink
         to="/"
         className="home-link"
          >
          <
        </NavLink>
        </div>
        <div className="navlinks">
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
      </div>
    </nav>
  );
};

export default Navbar;
