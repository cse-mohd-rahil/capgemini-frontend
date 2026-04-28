import React from 'react'
import Navbar from './Navbar'
import context from './UserContext'
import User from './User'
import Profile from './Profile'

const App = () => {
  let username="Rahil"


  return (
    <div>
      <context.Provider value={username}>
      <Profile/>
      </context.Provider>
    </div>
  )
}

export default App
