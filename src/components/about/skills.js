import React from "react";
import PropTypes from "prop-types";

import Skill from "./skill";

const Skills = ({ skills, skillsImages }) =>
  skills.map(skill => (
    <Skill
      key={skill.title}
      title={skill.title}
      frameworks={skill.frameworks}
      skillsImages={skillsImages}
    />
  ));

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default Skills;
