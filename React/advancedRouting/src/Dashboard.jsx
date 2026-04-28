import React from 'react'
import {Outlet,Link} from 'react-router-dom'
const Dashboard = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",padding:"40px"}}>
        <div>
            <Link to="users">Users</Link> <br /><br />
            <Link to="courses">Courses</Link>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard