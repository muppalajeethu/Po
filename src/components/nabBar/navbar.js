import React from 'react';
import './navbar.css';
import logo from '../../assets/assets/logo.png';
import contactImg from "../../assets/assets/contact.png";
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopmenuListItem">Home</Link>
        <Link className="desktopmenuListItem">About</Link>
        <Link className="desktopmenuListItem">Clients</Link>
        <Link className="desktopmenuListItem">Portfolio</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contactImg} alt="" className="desktopMenuImg" /> contact me
      </button>
    </nav>
  );
}

export default Navbar