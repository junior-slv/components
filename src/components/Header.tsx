import React, { useState } from "react";
import "./Header.css";
import logo from "./logo512.png";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header className={active ? "header_container-toggle" : "header_container"}>
      <img src={logo} alt="" />
      <nav className="header_nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#contatos">Contatos</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#endereco">Onde</a>
          </li>
        </ul>
        <span className={active ? "nav_icon-close-toggle" : "nav_icon-close"}>
        <i onClick={() => setActive(false)} className="uil uil-multiply"></i>
      </span>
      </nav>
      <span className={active ? "nav_icon" : "nav_icon-toggle"}>
        <i
          onClick={() => setActive(true)}
          className="uil uil-bars nav_icon-toggle"
        ></i>
      </span>

    </header>
  );
};

export default Header;
