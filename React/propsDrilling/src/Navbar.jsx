import React from 'react'
import Profile from './Profile'

const Navbar = (prop) => {
    let {username}=prop    
  return (
    <div>
        <nav style={{fontSize:"18px",display:"flex", justifyContent:"space-between", border:'2px solid',backgroundColor:"coral",color:"lightcyan",padding:"10px"}}>
            <h1>My Website</h1>
            <Profile username={username}/>
        </nav>
    </div>
  )
}

export default Navbar