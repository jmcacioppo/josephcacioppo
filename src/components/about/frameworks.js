import React from "react";
import PropTypes from "prop-types";

import Framework from "./framework";

const Frameworks = ({ frameworks, skillsImages }) => (
  <div className="FlexContainer FlexWrap JustifyContentCenter">
    {frameworks.map(framework => (
      <Framework
        key={framework.name}
        name={framework.name}
        image={
          skillsImages.find(skillsImage =>
            framework.image.includes(skillsImage.name)
          ).childImageSharp.gatsbyImageData
        }
      />
    ))}
  </div>
);

Frameworks.propTypes = {
  frameworks: PropTypes.array.isRequired,
};

export default Frameworks;
