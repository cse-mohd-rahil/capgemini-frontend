import React from 'react'
import { useContext } from 'react'
import context from './UserContext'

const User = () => {
    let result=useContext(context)
    console.log(result)
  return (
    <div>
        <span>👤</span>      
        <span>Username : <i>{result }</i></span>
    </div>
  )
}

export default User
