/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Footer from "./Footer"
// import Nav from "./Nav"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(71, 68, 68)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        {/* <Nav /> */}
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
