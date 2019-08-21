import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "../styles/index.css"
import "../styles/flex.css"
import "../styles/text.css"

const Layout = ({ children }) => {
  return (
    <div className="App FlexContainer FlexColumn JustifyContentSpaceBetween">
      <Header />
      <main className="Main">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
