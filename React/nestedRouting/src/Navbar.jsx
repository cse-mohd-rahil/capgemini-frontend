import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{backgroundColor:"black",padding:"20px"}}>
        <Link to="/" style={navStyle}>HOME</Link>
        <Link to="/about" style={navStyle}>ABOUT</Link>
        <Link to="/contact" style={navStyle}>CONTACT</Link>
        <Link to="/dashboard" style={navStyle}>DASHBOARD</Link>
    </div>
  )
}

export default Navbar

let navStyle={
    color:"white",
    textDecoration:"none",
    margin:"20px"
}