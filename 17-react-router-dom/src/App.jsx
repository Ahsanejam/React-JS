import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Product from './pages/Product'


const App = () => {
  return (
    <div>
      {/* <div className='nav'>
        <h3>Shreyans</h3>
        <div>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div> */}
      <Navbar />

      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/about'  element={<About />} />
        <Route path='/contact'  element={<Contact />} />
        <Route path='/product' element={<Product />} />
      </Routes>

      {/* <h2>This is Footer</h2> */}
    </div>
  )
}

export default App

