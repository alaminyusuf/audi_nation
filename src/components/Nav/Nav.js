import React from "react"
import tw from "twin.macro"

const Nav = tw.nav`py-5`
const Ul = tw.ul`flex justify-evenly`
const Li = tw.li`uppercase hover:text-yellow-500 cursor-pointer`

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <Li>Home</Li>
        <Li>View More</Li>
        <Li>Contact Us</Li>
        <Li>About Us</Li>
      </Ul>
    </Nav>
  )
}

export default Navbar
