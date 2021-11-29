import React from "react";
import "./Home.css";
import cover from "./cover.png";
import About from './../About/About';
import Portfolio from "../Portfolio/Portfolio";
import Contact from './../Contact/Contact';
const Home = () => {
  return (
    <div className="home">
      <div className="cover">
        <div className="section">
          <h1 className="name">
            <span className="name-title">MD</span> <br /> HASIBUL <br />
            <span className="name-title">ISLAM</span>{" "}
          </h1>
          <h3>Full Stack Web Developer </h3>
          <div className="social">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-facebook-f"></i>
          </div>
        </div>
        <div className="cover-image-container">
          <img className="cover-image" src={cover} alt="" />
        </div>
      </div>{" "}
    <br /><br />
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
};

export default Home;
