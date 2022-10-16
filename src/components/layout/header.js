import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState, useEffect } from "react";
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";
import "./header.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [width, setWidth] = useState(
    typeof window !== `undefined` && window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 550) {
        setIsNavOpen(false);
      }
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="Header FlexContainer FlexColumn">
      <div
        className={`FlexContainer FlexWrap JustifyContentSpaceBetween ${
          width && width <= 300 ? "FlexColumn AlignItemsCenter" : ""
        }`}
      >
        <Link to="/">
          <StaticImage src="../../images/logo/JC.png" alt="JC" />
        </Link>

        <div className="NavContainer FlexContainer AlignItemsCenter">
          {isNavOpen || (width && width > 550) ? (
            <>
              <div
                className={
                  width && width <= 550
                    ? "FlexContainer FlexColumn AlignItemsCenter"
                    : ""
                }
              >
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </div>
              {isNavOpen && width && width <= 550 ? (
                <GiCancel
                  onClick={() => setIsNavOpen(false)}
                  className="NavIcon CancelIcon"
                />
              ) : (
                ""
              )}
            </>
          ) : (
            <GiHamburgerMenu
              onClick={() => setIsNavOpen(true)}
              className="NavIcon HamburgerMenu"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
