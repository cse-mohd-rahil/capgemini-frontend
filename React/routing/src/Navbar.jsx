import React from 'react'
import { Link,NavLink } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div style={{padding:"20px",backgroundColor:"black",justifyContent:"space-around", marginBottom:"10px"}}>
//         <Link to="/" style={{color:"white",textDecoration:"none",margin:"20px"}}>HOME</Link>
//         <Link to="/about" style={{color:"white",textDecoration:"none",margin:"10px"}}>ABOUT</Link>
//         <Link to="/contact" style={{color:"white",textDecoration:"none",margin:"10px"}}>CONTACT</Link>
//         <Link to="/services" style={{color:"white",textDecoration:"none",margin:"10px"}}>SERVICES</Link>
//         <Link to="/login" style={{color:"white",textDecoration:"none",margin:"10px"}}>LOGIN</Link>
//     </div>
//   )
// }

// export default Navbar


//------------------------------------------using NavLink

const Navbar = () => {
  return (
    <div style={{padding:"20px",backgroundColor:"black",justifyContent:"space-around", marginBottom:"10px"}}>
        <NavLink to="/" style={NavLinkStyle}>HOME</NavLink>
        <NavLink to="/about" style={NavLinkStyle}>ABOUT</NavLink>
        <NavLink to="/contact" style={NavLinkStyle}>CONTACT</NavLink>
        <NavLink to="/services" style={NavLinkStyle}>SERVICES</NavLink>
        <NavLink to="/login" style={NavLinkStyle}>LOGIN</NavLink>
    </div>
  )
}

export default Navbar

let NavLinkStyle=({isActive})=>({color:isActive?"black":"white",backgroundColor:isActive?"white":"black",textDecoration:"none", margin:"20px",padding:"10px"})