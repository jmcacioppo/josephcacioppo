import React from "react";
import resume from "../../images/cacioppo_resume.pdf";
import "./footer.css";

const Footer = () => (
  <footer className="Footer FlexContainer JustifyContentCenter AlignItemsCenter">
    <a
      className="SocialMediaLink GitHub"
      href="https://github.com/jmcacioppo"
      rel="noopener noreferrer"
      target="_blank"
    >
      GitHub
    </a>

    <a
      className="SocialMediaLink LinkedIn"
      href="https://www.linkedin.com/in/joseph-cacioppo-a05355135/"
      rel="noopener noreferrer"
      target="_blank"
    >
      LinkedIn
    </a>

    <a
      className="SocialMediaLink Resume"
      download
      href={resume}
      rel="noopener noreferrer"
      target="_blank"
    >
      Resume
    </a>
  </footer>
);

export default Footer;
