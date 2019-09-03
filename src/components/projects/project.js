import React from "react";
import PropTypes from "prop-types";
import "./project.css";

const Project = ({ link, image, title, tools }) => (
  <div key={title} className="ProjectInfoContainer">
    <a
      className="ProjectImageContainer"
      rel="noopener noreferrer"
      target="_blank"
      href={link}
    >
      <img
        className="ProjectImage"
        src={require(`../../images/${image}`)}
        alt={title}
      />
    </a>

    <div className="ProjectTextContainer">
      <div className="ProjectText">
        <h2 className="ProjectTitle">
          <b>{title}</b>
        </h2>
        <div className="ProjectTools">
          <ul>
            {tools.map(tool => (
              <li className="ProjectTool" key={tool}>
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

Project.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tools: PropTypes.array.isRequired,
};

export default Project;
