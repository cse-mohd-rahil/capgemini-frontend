import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  let navigate=useNavigate()
  function handleClick(){
      navigate("/services")
  }
  return (
    <div>About
      <br /> <br />
      <button onClick={handleClick}>Go to Services</button>
    </div>
  )
}

export default About