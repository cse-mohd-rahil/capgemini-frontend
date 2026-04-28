import React from 'react'
import User from './User'

const Profile = (prop) => {
    console.log(prop)
    let {username}=prop
  return (
    <div style={{}}>
        <div style={{display:"flex",gap:"20px", alignItems:"center"}}>
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Contact</h2>    
             
        <User />
        </div> 
    </div>
  )
}

export default Profile
