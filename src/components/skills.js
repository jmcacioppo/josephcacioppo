import React from "react";
import PropTypes from "prop-types";

import Skill from "./skill";

const Skills = ({ skills }) =>
  skills.map(skill => (
    <Skill
      key={skill.title}
      title={skill.title}
      frameworks={skill.frameworks}
    />
  ));

Skills.propTypes = {
  title: PropTypes.string.isRequired,
  frameworks: PropTypes.array.isRequired,
};

export default Skills;
