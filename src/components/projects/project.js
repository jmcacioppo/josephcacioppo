import React from "react";
import PropTypes from "prop-types";
import "./project.css";

const Project = ({ title, image, tools }) => (
  <div key={title} className="ProjectInfoContainer">
    <div className="ProjectImageContainer">
      <img
        className="ProjectImageDimensions"
        src={require(`../../images/${image}`)}
        alt={title}
      />
    </div>

    <div className="ProjectTextContainer">
      <div className="slide">
        <h3 className="ProjectTitle">
          <b>{title}</b>
        </h3>
        <h4 className="ProjectTools">
          <b>{tools}</b>
        </h4>
      </div>
    </div>
  </div>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired,
};

export default Project;
