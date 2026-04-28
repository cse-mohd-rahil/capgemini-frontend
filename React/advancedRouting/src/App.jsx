import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Navbar'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Services from './Services'
import Dashboard from './Dashboard'
import Users from './Users'
import Courses from './Courses'

let router=createBrowserRouter([
  {
    path:"/",
    element:<Navbar/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"services",
        element:<Services/>
      },
      {
        path:"dashboard",
        element:<Dashboard/>,
        children:[
          {
            path:"users",
            element:<Users/>
          },
          {
            path:"courses",
            element:<Courses/>
          }
        ]
      }
    ]
  }
  
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App