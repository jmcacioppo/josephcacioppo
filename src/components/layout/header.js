import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import "./header.css";

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
  `);

  return (
    <header className="Header FlexContainer FlexColumn">
      <div className="FlexContainer FlexWrap JustifyContentSpaceBetween">
        <Link to="/">
          <Img fixed={data.logo.childImageSharp.fixed} />
        </Link>

        <div className="NavContainer FlexContainer AlignItemsCenter">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
