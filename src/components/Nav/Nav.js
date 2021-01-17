import React from "react"
import tw from "twin.macro"

const Ul = tw.ul`flex text-red-500`

const Nav = () => {
  return (
    <nav>
      <Ul>
        <li>Home</li>
        <li>View More</li>
        <li>Contact Us</li>
      </Ul>
    </nav>
  )
}

export default Nav
