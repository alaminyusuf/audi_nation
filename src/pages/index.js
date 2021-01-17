import React from "react"
import "tailwindcss/dist/base.min.css"

import Layout from "../components/layout"
import tw from "twin.macro"

const Heading = tw.h1`text-blue-500 text-2xl p-2`

const IndexPage = () => {
  return (
    <Layout>
      <Heading>Hello World!</Heading>
    </Layout>
  )
}
export default IndexPage
