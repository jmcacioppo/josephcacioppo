import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Projects from "../components/projects";
import projects from "../data/projects.json";

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1 className="HeaderTitle">Projects</h1>
    <Projects projects={projects} />
  </Layout>
);

export default ProjectsPage;
