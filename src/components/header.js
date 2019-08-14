import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo/JC.png" }) {
        childImageSharp {
          fixed(width: 105, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      github: file(relativePath: { eq: "icons/github.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedin: file(relativePath: { eq: "icons/linkedin.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header className="Header FlexContainer FlexColumn">
      <div className="FlexContainer JustifyContentSpaceBetween">
        <Img fixed={data.logo.childImageSharp.fixed} />

        <div>
          <a
            href="https://github.com/jmcacioppo"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Img fixed={data.github.childImageSharp.fixed} />
          </a>

          <a
            href="https://www.linkedin.com/in/joseph-cacioppo-a05355135/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Img fixed={data.linkedin.childImageSharp.fixed} />
          </a>
        </div>
      </div>

      <div className="HeaderTextContainer FlexContainer FlexColumn JustifyContentCenter">
        <h1 className="HeaderTitle">Joseph Cacioppo</h1>
        <h2 className="HeaderSubTitle">Web Developer</h2>
      </div>

      <h1 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
