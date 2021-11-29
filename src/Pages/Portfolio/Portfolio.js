import React, { useEffect, useState } from "react";
import houseplant from "./houseplant.jpeg";
import tour from "./tourde.jpeg";
import healthCare from "./healthcare.jpeg";
import science from "./sciencehacks.jpeg";
import heaven from "./heaven.jpeg";
import foodie from "./onion.jpeg";
import "./Portfolio.css";

const fakeDb = [
  {
    id: "01",
    image: houseplant,
    siteLink: "https://house-plant-world.web.app/",
    githubClient:
      "https://github.com/HasibRockie/house-plant-world-client-side",
    githubServer:
      "https://github.com/HasibRockie/house-plant-world-server-side",
  },
  {
    id: "02",
    image: tour,
    siteLink: "https://tour-de-world-private-limited.web.app/",
    githubClient: "https://github.com/HasibRockie/tour-de-world-client-side",
    githubServer: "https://github.com/HasibRockie/tour-de-world-server-side",
  },
  {
    id: "03",
    image: healthCare,
    siteLink: "https://hasib-health-care.netlify.app/",
    githubClient: "https://github.com/HasibRockie/Hasib-Health-Care-Laboratory",
  },
  {
    id: "04",
    image: science,
    siteLink: "https://science-hacks-and-programming.netlify.app/",
    githubClient:
      "https://github.com/HasibRockie/science-hacks-and-programming",
  },
  {
    id: "05",
    image: heaven,
    siteLink: "https://heaven-store.netlify.app/",
    githubClient: "https://github.com/HasibRockie/Paradise-Store",
  },
  {
    id: "06",
    image: foodie,
    siteLink: "https://hot-foodie-restaurant.netlify.app/",
    githubClient: "https://github.com/HasibRockie/Hot-onion-restaurant",
  },
];

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(fakeDb);
  }, []);
  return (
    <div className="portfolio" id="portfolio">
      <h2 style={{ textAlign: "left", paddingLeft: "40px" ,fontSize:"50px"}}>
        Creative Portfolio{" "}
      </h2>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <a
              href={project.siteLink}
              target="_blank"
              
            >
              <img src={project.image} style={{ border: "1px solid gray", borderRadius: "3px" }} alt="" />
            </a>
            <div className="links">
              <a href={project.siteLink} target="_blank">Live Site</a>
              <a href={project.githubClient} target="_blank">Github Client Side</a>
              {project?.githubServer && (
                <a href={project?.githubServer} target="_blank">Github Server Side</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
