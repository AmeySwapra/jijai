import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import ProductPage from './Pages/ProductPage'
import ContactPage from './Pages/ContactPage'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/product' element={<ProductPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App