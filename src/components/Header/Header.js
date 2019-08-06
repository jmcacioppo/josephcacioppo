import React from "react";
import "./Header.css";

const Header = () => (
  <header className="Header FlexContainer FlexColumn">
    <div className="FlexContainer JustifyContentSpaceBetween">
      <img
        className="JCLogo"
        src="/img/logo/SiteLogo.png"
        alt="Joseph Cacioppo - Software Developer"
      />

      <div>
        <a
          href="https://github.com/jmcacioppo"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="SocialLogo"
            src="/img/logo/GitHubLogo.png"
            alt="Joseph Cacioppo - Github"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/joseph-cacioppo-a05355135/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="SocialLogo"
            src="/img/logo/LinkedInLogo.png"
            alt="Joseph Cacioppo - LinkedIn"
          />
        </a>
      </div>
    </div>

    <div className="HeaderTextContainer CenterText FlexContainer FlexColumn JustifyContentCenter">
      <h1 className="HeaderTitle">
        <b>Joseph Cacioppo</b>
      </h1>
      <h2 className="HeaderSubTitle">
        <b>Software Developer</b>
      </h2>
    </div>
  </header>
);

export default Header;
