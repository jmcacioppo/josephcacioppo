import React from "react";

import SEO from "../components/common/seo";
import Layout from "../components/layout/layout";
import Projects from "../components/projects/projects";
import projects from "../data/projects.json";

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1 className="HeaderTitle">Projects</h1>
    <Projects projects={projects} />
  </Layout>
);

export default ProjectsPage;
