import React from "react"
import tw from "twin.macro"

import LuxCar from "../../images/audi r8.jpeg"

const Container = tw.div`py-10`
const Luxury = tw.div`md:flex justify-evenly py-2`
const Sport = tw.div`md:flex justify-evenly py-2`
const Heading = tw.h1`text-yellow-500 text-3xl pt-3 uppercase font-bold`
const Text = tw.div`block md:w-1/2`
const P = tw.p`leading-loose text-base tracking-wider py-3`
const ImgContainter = tw.div`md:w-2/5`

const Featured = () => {
  return (
    <Container>
      <Luxury>
        <Text>
          <div className="centered">
            <Heading>Luxury</Heading>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui
              perferendis quod accusamus ipsum. Minima culpa quod ut numquam
              porro delectus suscipit laudantium, quisquam blanditiis ullam
              earum beatae illum distinctio.
            </P>
          </div>
        </Text>
        <ImgContainter>
          <img src={`${LuxCar}`} className="w-full" alt="Luxury Vehicle" />
        </ImgContainter>
      </Luxury>
      <Sport>
        <ImgContainter>
          <img src={`${LuxCar}`} className="w-full" alt="Sport Vehicle" />
        </ImgContainter>
        <Text>
          <div className="centered">
            <Heading>Sport</Heading>
            <P>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt,
              obcaecati. Dolor, placeat! Natus asperiores vitae quibusdam
              adipisci accusantium non assumenda, quos unde mollitia debitis
              blanditiis, libero quis veritatis aperiam minima?
            </P>
          </div>
        </Text>
      </Sport>
    </Container>
  )
}

export default Featured
