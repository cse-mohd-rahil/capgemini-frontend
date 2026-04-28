import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './Products'
import ProductDetails from './ProductDetails'

let router=createBrowserRouter([
  {
    path:"/",
    element:<Products/>,
  },
  {
    path:"/product/:id",
    element:<ProductDetails/>
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