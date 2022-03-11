import React from 'react'
import SearchBar from './searchBar'
import logo from '../../Assets/Logo.jpg'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import AccountCircle from '@material-ui/icons/AccountCircle'
import './header.css'


function Header() {
  return (
    <header className='header-container'>
        <img src = {logo} alt = ''/>
        <SearchBar />
        <AccountCircle />
        <ShoppingCart />
    </header>
  )
}

export default Header