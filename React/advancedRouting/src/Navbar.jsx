import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{display:"flex", gap:"20px",backgroundColor:"purple", padding:"20px"}}>
            <Link style={{color:"white",textDecoration:"none"}} to="/">Home</Link>
            <Link style={{color:"white",textDecoration:"none"}} to="about">About</Link>
            <Link style={{color:"white",textDecoration:"none"}} to="contact">Contact</Link>
            <Link style={{color:"white",textDecoration:"none"}} to="services">Services</Link>
            <Link style={{color:"white",textDecoration:"none"}} to="dashboard">Dashboard</Link>

        </div>

        <div style={{textAlign:"center",backgroundColor:"yellow"}}>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Navbar