import React from "react";

import SEO from "../components/common/seo";
import Layout from "../components/layout/layout";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{ height: "100%" }}
      className="FlexContainer FlexColumn JustifyContentCenter"
    >
      <h1 className="HeaderTitle">Joseph Cacioppo</h1>
      <h2 className="HeaderSubTitle">Web Developer</h2>
    </div>
  </Layout>
);

export default IndexPage;
