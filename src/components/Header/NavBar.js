import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function NavBar() {
  return (
    <div className='nav-container'>
        <div className='list-icon'>
        <i className="material-icons list-icon icon">list_icon</i>
        </div>
        <nav className='nav-bar-group'>
                <Link to= '/food' className="nav-link">FOOD</Link>
                <Link to= '/clothes' className="nav-link">CLOTHES</Link>
                <Link to= '/groceries' className="nav-link">GROCERIES</Link>
                <Link to= '/kitchen-appliances' className="nav-link">KITCHEN APPLIANCES</Link>
                <Link to= '/household' className="nav-link">HOUSEHOLD</Link>
        </nav>
    </div>
  )
}

export default NavBar


