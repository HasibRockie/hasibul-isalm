import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./hasib-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="half">
        <img src={logo} alt="logo" height="90px"></img>
      </div>
      <div className="half">
        <NavLink as={Link} to="/home">
          Home
        </NavLink>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Header;
