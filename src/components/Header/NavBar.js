import React from 'react'
import { Link } from 'react-router-dom'
import ListIcon from '@material-ui/icons/List'
import './header.css'

function NavBar() {
  return (
    <div className='nav-container'>
        <div className='list-icon'>
            <ListIcon className='list-icon'/>
        </div>
        <nav className='nav-bar-group'>
                <li className="nav-item">
                <Link to= '' className="nav-link">FOOD</Link>
                </li>
                <li className="nav-item">
                <Link to= '' className="nav-link">CLOTHES</Link>
                </li>
                <li className="nav-item">
                <Link to= '' className="nav-link">GROCERIES</Link>
                </li>
                <li className="nav-item">
                <Link to= '' className="nav-link">KITCHEN APPLIANCES</Link>
                </li>
                <li className="nav-item">
                <Link to= '' className="nav-link">HOUSEHOLD</Link>
                </li>
        </nav>
    </div>
  )
}

export default NavBar


