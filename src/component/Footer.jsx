import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <h1>Nabthong Supipak</h1>
      </div>

      <div className="middle-footer">
        <ul className=" footer-menu">
          <li className="footer_menu_list">
            <a href="#home">HOME</a>
          </li>

          <li className="footer_menu_list">
            <a href="#about">About</a>
          </li>

          <li className="footer_menu_list">
            <a href="#project">Project</a>
          </li>

          <li className="footer_menu_list">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="footer-social-icons">
        <div className="icon">
          <a href="https://www.instagram.com/satunaja99/">
            <i className="uil uil-instagram-alt"></i>
          </a>
        </div>
        <div className="icon">
          <a href="https://www.facebook.com/wisarut">
            <i className="uil uil-facebook"></i>
          </a>
        </div>
        <div className="icon">
          <a href="https://www.github.com/JeyZ9">
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
      <div className="bottom-footer">
        <p> Copyright &copy; Nabthong - All rifgr reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
