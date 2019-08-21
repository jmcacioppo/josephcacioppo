import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
  </Layout>
)

export default About
