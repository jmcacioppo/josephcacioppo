import React from "react";
import PropTypes from "prop-types";
import Framework from "./framework";
import "./frameworks.css";

const Frameworks = ({ frameworks }) => (
  <div className="FrameworkImagesContainer">
    {frameworks.map(framework => (
      <Framework
        key={framework.name}
        name={framework.name}
        image={framework.image}
      />
    ))}
  </div>
);

Frameworks.propTypes = {
  frameworks: PropTypes.array.isRequired,
};

export default Frameworks;
