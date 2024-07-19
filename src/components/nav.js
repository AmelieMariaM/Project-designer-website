import React, { useState } from "react";
import "../styles/nav.css";
import logo from "../assets/logo 100px-02.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <img src={logo} alt="logo-Elliot" className="logo" />
      <ul className={`nav-list ${isOpen ? "open" : ""}`}>
        <li>
          <a className="nav-link" href="#home">
            HOME
          </a>
        </li>
        <li>
          <a className="nav-link" href="#about">
            ABOUT
          </a>
        </li>
        <li>
          <a className="nav-link" href="#design">
            DESIGN
          </a>
        </li>
        <li>
          <a className="nav-link" href="#art">
            ILLUSTRATIONS & ART
          </a>
        </li>
        <li>
          <a className="nav-link" href="#contact">
            CONTACT
          </a>
        </li>
      </ul>
      <button className="navbar-burger" onClick={toggleMenu}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
}

export default Nav;
