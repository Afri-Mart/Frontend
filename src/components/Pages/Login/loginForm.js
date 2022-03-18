import React, { useState } from 'react'
import './loginForm.css'
import {Link} from 'react-router-dom'

function LoginForm({ logIn, logOut, error }) {
    const [userDetails, setUserDetails ] = useState({email: '', password: ''})


const handleSubmit = (event) => {
    event.preventDefault();
    if(userDetails.email !== ''|| userDetails.password !== ''){
        logIn(userDetails)
        setUserDetails({...userDetails, email: '', password: ''})
    }
}

  return (
    <div className='form-container'>
        <form onSubmit = {handleSubmit}>
            
            <div className='form-group'> 
                <h3>LOGIN</h3>

                <div className='form-inner'>
                    <label htmlFor='name'></label>
                    <input className='login-input'
                        type = 'email'
                        id = 'name'
                        placeholder='Email'
                        value = {userDetails.email} 
                        onChange = {e => setUserDetails({...userDetails, email: e.target.value})}
                    />
                </div>

                <div className='form-inner'>
                    <label htmlFor='password'></label>
                    <input className='login-input'
                        type = 'password'
                        id = 'password'
                        placeholder='Password'
                        value = {userDetails.password} 
                        onChange = {e => setUserDetails({...userDetails, password: e.target.value})}
                    />
                </div>

                <button className='login-input'>Continue</button>
                {(error !== '') ? (<p>{error}</p>) : ''}

            
                <div className='extra-details'>
                    <p>Don't have an account?</p> <Link to= '' className="nav-link">Create New Account</Link>
                </div>
                <p><a href = '/'>Forgot password?</a></p>
                
            </div>

        </form>
        
    </div>
  )
}

export default LoginForm