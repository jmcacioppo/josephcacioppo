import { graphql } from "gatsby";
import React from "react";

import AboutMe from "../components/about/about-me";
import Skills from "../components/about/skills";
import SEO from "../components/common/seo";
import Layout from "../components/layout/layout";
import skills from "../data/skills.json";

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <h1 className="HeaderTitle">About</h1>
    <AboutMe />
    <br />
    <Skills
      skills={skills}
      skillsImages={data.skillsImages.edges.map(edge => edge.node)}
    />
  </Layout>
);

export const pageQuery = graphql`
  query {
    skillsImages: allFile(filter: { relativeDirectory: { eq: "skills" } }) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default AboutPage;
