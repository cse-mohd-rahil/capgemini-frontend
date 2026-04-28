import React from 'react'

const User = (prop) => {
let {username}=prop
  return (
    <div style={{padding:"14px",display:"flex",gap:"3px",alignItems:"center"}}>
        <span>👤</span>
        <span>Username: <b>{username}</b></span>
    </div>
  )
}

export default User