/**
 * This component contains images of some selected products for visitors preview
 */

import React from "react"
import tw from "twin.macro"
import Img1 from "../../images/audi a7.jpeg"
import Img2 from "../../images/audi gt4.jpg"
import Img3 from "../../images/audi a8.jpeg"
import Img4 from "../../images/audi r8 v10.jpeg"

import Heading from "../Header"

const Container = tw.div`gap-1 grid grid-cols-1 md:grid-cols-2`
const Image = tw.img`w-full h-full`

const Collection = () => {
  return (
    <div>
      <div className="text-center my-5">
        <Heading>Our Collection</Heading>
      </div>
      <Container>
        <Image src={Img1} alt={`${Img1}`} />
        <Image src={Img2} alt={`${Img2}`} />
        <Image src={Img3} alt={`${Img3}`} />
        <Image src={Img4} alt={`${Img4}`} />
      </Container>
    </div>
  )
}

export default Collection
