import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Login from './pages/Login'
import Register from './pages/Register'
const App = () => {
  return (
    <div>
           <BrowserRouter>
           <Routes>
            <Route path='/' element={<Welcome/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/services' element={<Services/> }></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>

           </Routes>
           </BrowserRouter> 
    </div>
  )
}

export default App