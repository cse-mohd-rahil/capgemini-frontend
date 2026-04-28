import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let nav=useNavigate()
  function handleClick(){
    nav("/")
  }
  return (
    <div>Login <br /><br />
    <button onClick={handleClick}>Go to Home</button>
    </div>
  )
}

export default Login