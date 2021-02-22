import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"

const Body = tw.footer`text-center py-5 bg-primary`

const Footer = () => {
  return (
    <Body>
      © {new Date().getFullYear()}
      {` `}
      <Link href="http://localhost:8000">Audi Nation</Link>
    </Body>
  )
}

export default Footer
