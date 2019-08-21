import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo/JC.png" }) {
        childImageSharp {
          fixed(width: 105, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header className="Header FlexContainer FlexColumn">
      <div className="FlexContainer JustifyContentSpaceBetween">
        <Link to="/">
          <Img fixed={data.logo.childImageSharp.fixed} />
        </Link>

        <div className="NavContainer FlexContainer AlignItemsCenter">
          <Link to="/">About</Link>
          <Link to="/">Projects</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>

      <div className="HeaderTextContainer FlexContainer FlexColumn JustifyContentCenter">
        <h1 className="HeaderTitle">Joseph Cacioppo</h1>
        <h2 className="HeaderSubTitle">Web Developer</h2>
      </div>

      <div className="FlexContainer JustifyContentCenter">
        <a
          className="SocialMediaLink"
          href="https://github.com/jmcacioppo"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="SocialMediaLink"
          href="https://www.linkedin.com/in/joseph-cacioppo-a05355135/"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="SocialMediaLink"
          href="https://www.linkedin.com/in/joseph-cacioppo-a05355135/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Something Else
        </a>
      </div>
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
