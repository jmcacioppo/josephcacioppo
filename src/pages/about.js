import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Skills from "../components/skills";
import skills from "../data/skills.json";
import AboutMe from "../components/about-me";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1 className="HeaderTitle">About</h1>
    <AboutMe />
    <br />
    <Skills skills={skills} />
  </Layout>
);

export default AboutPage;
