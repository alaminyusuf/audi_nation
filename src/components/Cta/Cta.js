import React from "react"
import tw from "twin.macro"
const Button = tw.button`py-5 px-6 text-yellow-500 font-bold`

const Cta = ({ children }) => {
  return <Button className="centred">{children}</Button>
}

export default Cta
