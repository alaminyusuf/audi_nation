import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"

const Wrapper = tw.div`bg-primary`
const Body = tw.footer`pt-10 pb-5 grid grid-cols-1 md:grid-cols-2`
const NewsLetter = tw.input`w-3/4 bg-primary text-white px-3`
const Label = tw.label`uppercase block text-secondary py-2 text-left`
const Text = tw.p`text-white uppercase mt-3`
const Btn = tw.button`bg-secondary text-white uppercase p-1 ml-3`
const Form = tw.form``
const ImageContainer = tw.div`h-8 w-24 bg-gray-500 mx-auto md:my-auto mt-2`

const Footer = () => {
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <Wrapper>
      <Body className="container">
        <div className="w-full mr-auto">
          <Form>
            <Label>Newsletter</Label>
            <NewsLetter type="email" className="styled-input xsm-input" />
            <Btn className="xsm-btn" onSubmit={() => handleSubmit()}>
              Submit
            </Btn>
          </Form>
          <Text>Email: info@audination.com</Text>
          <Text>Tel: +2342700383882</Text>
          <Text>Plot 321, Ayoba</Text>
        </div>
        <div>
          <Text>
            <Link href="http://localhost:8000">Audi Nation</Link>
          </Text>
          <Text>Lagos, nigeria</Text>
          <Text>&copy; 2021 All rights reserved</Text>
          <ImageContainer></ImageContainer>
        </div>
      </Body>
    </Wrapper>
  )
}

export default Footer
