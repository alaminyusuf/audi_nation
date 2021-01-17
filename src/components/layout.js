/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Nav from "./Nav"
import Container from "./Container"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#f8f8f8",
          color: "#000",
          fontFamily: "sans-serif",
        }}
      >
        <Nav />
        <Container>
          <main>{children}</main>
          <footer style={{ textAlign: "center" }}>
            © {new Date().getFullYear()}
            {` `}
            <a href="https://www.github.com/dev-empire">Audi Nation</a>
          </footer>
        </Container>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
