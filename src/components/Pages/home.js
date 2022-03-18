import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../Header/Header'
import NavBar from '../Header/NavBar'
import Products from '../Products/products'

function Home() {
  
  return (
    <BrowserRouter>
      <Header />
      <NavBar/>
      <Products />
    </BrowserRouter>
  )
}

export default Home
