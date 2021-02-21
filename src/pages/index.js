import React from "react"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import "../components/style.css"
import Featured from "../components/Featured"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <div className="container">
        <Featured />
      </div>
    </Layout>
  )
}
export default IndexPage
