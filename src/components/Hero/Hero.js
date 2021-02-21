import React from "react"
import tw from "twin.macro"
import Image from "../../images/audi planira.jpeg"
import Navbar from "../Nav"

const Wrapper = tw.section` bg-center bg-cover`
const Heading = tw.h1`text-yellow-500 text-5xl p-2 uppercase font-bold z-10`

const Hero = () => {
  return (
    <div className="overlay-container">
      <Wrapper
        style={{ backgroundImage: `url(${Image})`, height: "70vh" }}
        className="overlay-bg"
      >
        <div className="container">
          <Navbar />
          <Heading>Audi nation</Heading>
        </div>
      </Wrapper>
    </div>
  )
}

export default Hero