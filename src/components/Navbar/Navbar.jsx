import React from "react";
import bootstrap from "bootstrap";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <a href="./Home">Home</a>
        <a href="./About">About Me</a>
        <a href="./Work">How I Work</a>
        <a href="./Contact">Contact Me</a>
      </div>
    </nav>
  );
};

export default Navbar;
