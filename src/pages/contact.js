import React from "react";

import SEO from "../components/common/seo";
import Layout from "../components/layout/layout";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1 className="HeaderTitle">Contact</h1>
    <div className="FlexContainer AlignItemsCenter " style={{ height: "75%" }}>
      <p className="Paragraph CenterText">
        If you&#39;d like to chat, feel free to contact me here:
        <br />
        <span>
          <a
            style={{ color: "#f8f8f8" }}
            href="mailto:jmcacioppo0531@gmail.com"
          >
            jmcacioppo0531@gmail.com
          </a>
        </span>
      </p>
    </div>
  </Layout>
);

export default ContactPage;
