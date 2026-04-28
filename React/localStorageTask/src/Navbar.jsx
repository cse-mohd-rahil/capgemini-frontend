import React from 'react'
 import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div style={{backgroundColor:"#eee",display:"flex",gap:"24px",padding:"17px"}}>
          <Link style={{textDecoration:"none"}} to="/home">Home</Link>
          <Link style={{textDecoration:"none"}} to="/about">About</Link>
          <Link style={{textDecoration:"none"}} to="/contact">Contact</Link>
          <Link style={{textDecoration:"none"}} to="/services">Services</Link>
    </div>
  )
}

export default Navbar