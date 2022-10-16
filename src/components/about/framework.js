import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";

import "./framework.css";

const Framework = ({ name, image }) => (
  <div>
    <GatsbyImage className="FrameworkImage" image={image} alt={name} />
    <p className="CenterText">{name}</p>
  </div>
);
Framework.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
};

export default Framework;
