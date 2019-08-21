import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="HeaderTextContainer FlexContainer FlexColumn JustifyContentCenter">
      <h1 className="HeaderTitle">Joseph Cacioppo</h1>
      <h2 className="HeaderSubTitle">Web Developer</h2>
    </div>
  </Layout>
)

export default IndexPage
