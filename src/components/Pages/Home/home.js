import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../../Header/Header'
import NavBar from '../../Header/NavBar'
import Products from '../../Products/products'
import Footer from '../../Footer/Footer'

function Home() {
  
  return (
    <BrowserRouter>
      <Header />
      <NavBar/>
      <Products />
      <Footer />
    </BrowserRouter>
  )
}

export default Home
