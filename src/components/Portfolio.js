import React from "react";
import Project from "./Project";
import "./portfolio.css";

const projects = [
  {
    id: 0,
    title: "Express - Note Taker App",
    languages: "html, css, js",
    packages: "Express.js, Generate Unique IDs",
    image: "/img/notetaker1.jpg",
    description: "Write extensive notes and keep track of tasks, then save them for later reading or deletion.",
    repo: "https://github.com/Saria995/Express-Note-Taker.git",
    live: "https://saria-express-note-taker.herokuapp.com/",
  },
  {
    id: 1,
    title: "Basic Portfolio",
    languages: "html, css",
    packages: "none",
    image: "/img/Basic_Portfolio.png",
    description: "A basic work portfolio that holds my projects for the full stack development class.",
    repo: "https://github.com/Saria995/professional-employee-portfolio.git",
    live: "https://saria995.github.io/professional-employee-portfolio/",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    languages: "html, css, js",
    packages: "none",
    image: "/img/weather_image.png",
    description: "A basic app that allows you to see the weather for a specific searched or saved city.",
    repo: "https://github.com/Saria995/weather-dashboard.git",
    live: "https://saria995.github.io/weather-dashboard/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;