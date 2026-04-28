import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div style={{display:"flex",height:"91vh"}}>
      <div style={{padding:"30px",backgroundColor:"#eee"}}>
        <h1>Dashboard</h1>
        <Link to="users">Users</Link> <br /><br />
        <Link to="settings">Settings</Link>
      </div>
      <div style={{padding:"30px",backgroundColor:"lightgreen",width:"100%"}}>
        <h1>Dashboard Content</h1>
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard