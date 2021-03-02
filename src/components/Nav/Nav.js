import React from "react"
import tw from "twin.macro"

const Nav = tw.nav`py-5 sticky z-10`
const Ul = tw.ul`flex justify-evenly`
const Li = tw.li`uppercase text-yellow-500 hover:text-white cursor-pointer text-sm md:text-base`

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <Li className="nav-font">Home</Li>
        <Li className="nav-font">View More</Li>
        <Li className="nav-font">Contact Us</Li>
        <Li className="nav-font">About Us</Li>
      </Ul>
    </Nav>
  )
}

export default Navbar
