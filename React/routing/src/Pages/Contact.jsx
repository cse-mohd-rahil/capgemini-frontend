import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  let nav=useNavigate()
  function handleClick(){
    nav("/login")
  }
  return (
    <div>Contact <br /><br />
    <button onClick={handleClick}>Go to Login</button>
    </div>
  )
}

export default Contact