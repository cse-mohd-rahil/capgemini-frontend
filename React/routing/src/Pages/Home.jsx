import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate=useNavigate()
  function handleClick(){
      navigate("/about")
  }
  return (
    <div>Home <br /><br />
    <button onClick={handleClick}>Go to About</button>
    </div>
  )
}

export default Home