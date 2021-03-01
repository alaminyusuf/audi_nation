/**
 * This component is reusable(generics) header component
 */

import React from "react"
import tw from "twin.macro"

const Heading = tw.h1`text-yellow-500 text-3xl pt-3 uppercase font-bold`

const Header = ({ children }) => {
  return <Heading>{children}</Heading>
}

export default Header
