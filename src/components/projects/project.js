import React from "react";
import PropTypes from "prop-types";
import "./project.css";

const Project = ({ description, link, title, tools }) => (
  <div key={title} className="ProjectInfoContainer">
    <h1>
      <a
        className="ProjectTitle"
        rel="noopener noreferrer"
        target="_blank"
        href={link}
      >
        {title}
      </a>
    </h1>
    <div className="ProjectTools">
      <p>{description}</p>
      <div className="FlexContainer FlexWrap JustifyContentSpaceAround">
        {tools.map(tool => (
          <span className="ProjectTool" key={tool}>
            {tool}
          </span>
        ))}
      </div>
    </div>
  </div>
);

Project.propTypes = {
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tools: PropTypes.array.isRequired,
};

export default Project;
