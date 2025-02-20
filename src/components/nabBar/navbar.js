import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/assets/logo.png';
import contactImg from "../../assets/assets/contact.png";
import menu from "../../assets/assets/menu.png"

import { Link } from 'react-scroll';



const Navbar = () => {
  const [showMenu ,setShowMenu] = useState (false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopmenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopmenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-30}
          duration={500}
          className="desktopmenuListItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopmenuListItem"
        >
          Clients
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactImg} alt="" className="desktopMenuImg" /> contact me
      </button>
      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
        />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-30}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Clients
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar