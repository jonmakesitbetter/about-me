import React from "react";
import projects from "../../projects.json";
import Project from "./Project";

const Portfolio = () => {
  return (
    <div>
      <div class="col">
      {projects.map(project => (
          <Project
            siteLink={project.siteLink}
            image={project.image}
            name={project.name}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;