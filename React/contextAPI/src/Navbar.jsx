import React from 'react'
import Profile from './Profile'

const Navbar = () => {
    // let {username}=prop
  return (
    <div style={{}} >
        <nav style={{border:"2px solid grey",
             display:"flex", justifyContent:"space-between",
             alignItems:"center", backgroundColor:"orange",
             color:"white",padding:"20px"
             }}>      
        <h1>Mywebsite</h1>
        <Profile />
        </nav>
    </div>
  )
}

export default Navbar
