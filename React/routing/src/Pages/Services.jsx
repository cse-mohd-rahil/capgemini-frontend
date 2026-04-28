import React from 'react'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  let navigate=useNavigate()
  function handleClick(){
    navigate("/contact")
  }
  return (
    <div>Services <br /><br />
    <button onClick={handleClick}>Go to Contact</button>
    </div>
  )
}

export default Services