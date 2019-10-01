import React from "react";

import AboutMe from "../components/about/about-me";
import Skills from "../components/about/skills";
import SEO from "../components/common/seo";
import Layout from "../components/layout/layout";
import skills from "../data/skills.json";

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
