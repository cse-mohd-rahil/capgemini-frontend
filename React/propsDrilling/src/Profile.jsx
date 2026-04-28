import React from 'react'
import User from './User'

const Profile = (prop) => {
    let {username}=prop
        console.log(username);

  return (
    <div style={{display:"flex",gap:"40px",alignItems:"center"}}>
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Contact</h2>

        <User username={username}/>
    </div>
  )
}

export default Profile