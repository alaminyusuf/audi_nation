import React from "react"
import tw from "twin.macro"

const Container = tw.div`py-5 grid grid-cols-1 md:grid-cols-2`
const Text = tw.div`text-lg py-7 text-center`
const ImageContainer = tw.div`h-8 w-24 bg-gray-500 mx-auto md:my-auto`

const Announcement = () => {
  return (
    <Container>
      <Text>
        We are trusted and liscened by <i className="text-yellow-500">Audi</i>{" "}
        Motors, Get Email updates on newly arrived cars
      </Text>
      <ImageContainer></ImageContainer>
    </Container>
  )
}

export default Announcement
