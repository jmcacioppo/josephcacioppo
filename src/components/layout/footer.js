import React from "react"
import "./footer.css"

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

    {/* TODO: Get Resume downloading */}
    <a
      className="SocialMediaLink Resume"
      target="_blank"
      href="../images/cacioppo_resume.pdf"
      download
    >
      Resume
    </a>
  </footer>
)

export default Footer
