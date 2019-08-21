import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import skills from "../data/skills.json"

const About = () => (
  <Layout>
    <SEO title="About" />

    <div className="FlexContainer FlexColumn JustifyContentCenter">
      <h1 className="HeaderTitle">About</h1>
      <p className="Paragraph">
        Hello! My name is Joseph Cacioppo, and I am a web developer living in
        Richmond, Virginia.
      </p>
      <p className="Paragraph">
        I am a graduate of the University of Florida (Go Gators), where I
        studied Computer Science and learned to love building software.
      </p>
    </div>

    <br />

    {skills.map(skill => (
      <div className="SkillsContainer" key={skill.title}>
        <div className="SkillsItem box-shadow--6dp">
          <h3 className="CenterText">{skill.title}</h3>
          <hr />
          <div className="SkillsImagesContainer">
            {skill.frameworks.map(framework => (
              <div key={framework.name}>
                <img
                  className="SkillsImage"
                  src={require(`../images/${framework.image}`)}
                  alt={framework.name}
                />
                <p className="CenterText">{framework.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </Layout>
)

export default About
