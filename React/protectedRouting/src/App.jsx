import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Register from './Register'
import Login from './Login'
import Home from './Home'
import Protected from './Protected'
const App = () => {
  return (
    <div>
       <BrowserRouter>
             <Routes>
              <Route path='/' element={<Register/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/home' element={<Protected>
                                             <Home></Home>
                                            </Protected>}></Route>
             </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App