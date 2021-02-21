import React from "react"

import Layout from "../components/layout"
import tw from "twin.macro"

const Heading = tw.h1`text-yellow-500 text-2xl p-2 uppercase`

const IndexPage = () => {
  return (
    <Layout>
      <Heading>Audi nation</Heading>
    </Layout>
  )
}
export default IndexPage
