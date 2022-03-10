import React, { useState } from 'react'
import CreateAccount from './CreateAccount'
import './loginForm.css'

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
    <div>
        <form onSubmit = {handleSubmit}>
            
            <div className='form-group'> 
                <h3>LOG IN</h3>

                <div className='form-inner'>
                    <label htmlFor='name'>Email: </label>
                    <input 
                        type = 'email'
                        id = 'name'
                        value = {userDetails.email} 
                        onChange = {e => setUserDetails({...userDetails, email: e.target.value})}
                    />
                </div>

                <div className='form-inner'>
                    <label htmlFor='password'>Password: </label>
                    <input 
                        type = 'password'
                        id = 'password'
                        value = {userDetails.password} 
                        onChange = {e => setUserDetails({...userDetails, password: e.target.value})}
                    />
                </div>
                {(error !== '') ? (<p>{error}</p>) : ''}

                <div>
                    <button className='=submit-btn'>SUBMIT</button>
                </div>

            </div>
            <div className='extra-details'>
                <p>Don't have an account?</p> <p><a href = '/'>Create a new Account!</a></p>
                <p><a href = '/'>Forgot password?</a></p>
            </div>

        </form>
        
    </div>
  )
}

export default LoginForm