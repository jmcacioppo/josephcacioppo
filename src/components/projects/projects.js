import React from "react";
import PropTypes from "prop-types";

import Project from "./project";
import "./projects.css";

const Projects = ({ projects }) => (
  <div className="ProjectListContainer">
    {projects.map(project => (
      <Project
        key={project.title}
        image={project.image}
        link={project.link}
        title={project.title}
        tools={project.tools}
      />
    ))}
  </div>
);

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Projects;
