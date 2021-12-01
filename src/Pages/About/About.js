import React from "react";
import "./About.css";
import hasib from "./dark.webp";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="inner image-container">
        <img className="about-photo" src={hasib} alt="hasib"></img>
      </div>
      <div className="about-details">
        <h2>Full Stack Web Developer </h2>
        <p className="about-desc">
          I'm a web developer & I love to develop new and interesting websites.
          I've skills in <span>HTML5</span>, <span>CSS3</span>,{" "}
          <span>Javascript </span> & <span>Python. </span>
          I've expertise on <span>React Js</span>, <span>Node js</span> ,{" "}
          <span>Express Js</span>, <span>MongoDB</span>, <span>Firebase</span>{" "}
          and so on. I've also familiarity with <span>Bootstrap</span> &{" "}
          <span>Tailwind CSS</span> framework.
        </p>
        <h2>
          <a
            className="resume"
            href="https://drive.google.com/file/d/12kwF12FLMrELXfK0Q0Beu2vGneURhSu5/view?usp=sharing"
            target="_blank"
          >
            View Resume
          </a>
        </h2>
      </div>
    </div>
  );
};

export default About;
