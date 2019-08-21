import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import projects from "../data/projects.json"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="FlexContainer FlexColumn JustifyContentCenter">
      <h1 className="HeaderTitle">Projects</h1>
    </div>

    <div className="projectListContainer">
      {projects.map(project => (
        <div key={project.title} className="projectInfoContainer">
          <div className="projectImageContainer">
            <img
              className="projectImageDimensions"
              src={require(`../images/${project.image}`)}
              alt={project.title}
            />
          </div>

          <div className="projectTextContainer">
            <div className="slide">
              <h3 className="projectTitle">
                <b>{project.title}</b>
              </h3>
              <h4 className="projectTools">
                <b>{project.tools}</b>
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Layout>
)

export default Projects
