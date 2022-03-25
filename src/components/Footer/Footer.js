import React from 'react'
import logo from '../../Assets/logo.png'
import './footer.css'

function Footer() {
  return (
    <footer className='footer-container'>

        <div className='cols-group'>

            {/* 1st column */}
            <div className='col'>
                <h4 className='col-title'>INFORMATION</h4>
                <span></span>
                <ul>
                    <li><a href='/'>FAQ</a></li>
                    <li><a href='/'>About us</a></li>
                    <li><a href='/'>Our Blog</a></li>
                    <li><a href='/'>Return Policy</a></li>
                    <li><a href='/'>Contact Us</a></li>
                </ul>
            </div>

            {/* 2nd column */}
            <div className='col'>
                <h4 className='col-title'>GET TO KNOW US</h4>
                <ul>
                    <li><a href='/'>Careers</a></li>
                    <li><a href='/'>Blog</a></li>
                    <li><a href='/'>Sustainability</a></li>
                    <li><a href='/'>Press Center</a></li>
                    <li><a href='/'>Investor Relations</a></li>
                </ul>
            </div>

            {/* 3rd column */}
            <div className='col'>
                <h4 className='col-title'>SERVICES</h4>
                <ul>
                    <li><a href='/'>Afrimart Payment Products</a></li> 
                    <li><a href='/'>Afrimart Rewards Visa Signature Cards</a></li>
                    <li><a href='/'>Afrimart Store Card</a></li>
                    <li><a href='/'>Shop with Points</a></li>
                    <li><a href='/'>Afrim Currency Converter</a></li>
                </ul>
            </div>

        </div>

        <div className='end-footer'>
            <img src={logo} alt='Afri-mart Logo'></img>
        </div>

    </footer>
  )
}

export default Footer