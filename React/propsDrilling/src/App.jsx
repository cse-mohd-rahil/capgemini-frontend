import React from 'react'
import Navbar from './Navbar'

const App = () => {
  let username="Rahil"
  return (
    <div>
      <Navbar username={username}/>
    </div>
  )
}

export default App