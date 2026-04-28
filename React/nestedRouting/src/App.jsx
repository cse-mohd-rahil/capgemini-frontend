import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Dashboard from './Pages/Dashboard'
import Navbar from './Navbar'
import Users from './Pages/Users'
import Settings from './Pages/Settings'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>HOME</Route>
        <Route path='/about' element={<About/>}>ABOUT</Route>
        <Route path='/contact' element={<Contact/>}>CONTACT</Route>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='users' element={<Users/>}></Route>
          <Route path='settings' element={<Settings/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App