import React from 'react'
import Navbar from './Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Login from './Pages/Login'
import PageNotFound from './Pages/PageNotFound'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App