import React from "react"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import "../components/style.css"
import Featured from "../components/Featured"
import Collection from "../components/Collection"
import Announcement from "../components/Annoucement"

/**
 * Index page
 */
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <div className="container">
        <Featured />
        <Collection />
        <Announcement />
      </div>
    </Layout>
  )
}
export default IndexPage
