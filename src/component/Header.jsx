import React, { useState } from "react";
import cv_Nabthong from "../assets/download/cv_Nabthong.pdf";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">Nabnoeyy</p>
        <span>.</span>
      </div>
      <div
        className={`nav-menu ${isMenuOpen ? "responsive" : ""}`}
        id="myNavMenu"
      >
        <ul className="nav_menu_list nav_list">
          <li>
            <a href="#home" className="nav-link active-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#project" className="nav-link">
              Project
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li> 
        </ul>
      </div>
      <div className="nav-button">
        <a href={cv_Nabthong} target="_blank" rel="noopener noreferrer">
          <button className="btn">
            Download CV <i className="uil uil-download-alt"></i>
          </button>
        </a>
      </div>
      <div className="nav-menu-btn">
        <i
          className="uil uil-bars"
          onClick={toggleMenu}
          role="button"
          aria-expanded={isMenuOpen}
          aria-controls="myNavMenu"
        ></i>
      </div>
    </nav>
  );
};

export default Header;
