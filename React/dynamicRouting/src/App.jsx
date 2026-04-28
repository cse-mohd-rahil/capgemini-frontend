import React from 'react'
import Products from './Products'
import ProductDetails from './ProductDetails'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Products/>}></Route>
          <Route path='/product/:id' element={<ProductDetails/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App