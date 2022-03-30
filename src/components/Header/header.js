import React from 'react'
import SearchBar from './searchBar'
import logo from '../../Assets/logo.png'
import './header.css'

function Header() {
  return (
    <header className='header-container'>
        <img src = {logo} alt = 'Logo Design'/>
        <SearchBar />
        <i className="material-icons acct-icon icon">account_circle</i>
        <i className="material-icons icon">shopping_cart</i>
    </header>
  )
}

export default Header