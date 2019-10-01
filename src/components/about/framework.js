import React from "react";
import PropTypes from "prop-types";

import "./framework.css";

const Framework = ({ name, image }) => (
  <div>
    <img
      className="FrameworkImage"
      src={require(`../../images/${image}`)}
      alt={name}
    />
    <p className="CenterText">{name}</p>
  </div>
);

Framework.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Framework;
