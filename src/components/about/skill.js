import React from "react";
import PropTypes from "prop-types";

import Frameworks from "./frameworks";
import "./skill.css";

const Skill = ({ title, frameworks, skillsImages }) => (
  <div className="SkillContainer">
    <div className="SkillItem">
      <h3 className="CenterText">{title}</h3>
      <hr />
      <Frameworks frameworks={frameworks} skillsImages={skillsImages} />
    </div>
  </div>
);

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  frameworks: PropTypes.array.isRequired,
};

export default Skill;
