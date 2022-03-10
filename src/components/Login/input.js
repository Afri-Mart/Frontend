import React, { useState } from 'react'
import './login.css'

function Input() {
    const [userDetails, setUserDetails ] = useState({email: '', password: ''})


const handleSubmit = (event) => {
    event.preventDefault();
    if(userDetails.email !== ''|| userDetails.password != ''){
        alert(`WELCOME ${userDetails.email}`)
    }
}

  return (
    <form onSubmit = {handleSubmit}>
        
        <div className='form-group'> 

            <div className='form-inner'>
                <label for='name'>Email: </label>
                <input 
                    type = 'email'
                    id = 'name'
                    value = {userDetails.email} 
                    onChange = {e => setUserDetails({...userDetails, email: e.target.value})}
                />
            </div>

            <div className='form-inner'>
                <label for='password'>Password: </label>
                <input 
                    type = 'password'
                    id = 'password'
                    value = {userDetails.password} 
                    onChange = {e => setUserDetails({...userDetails, password: e.target.value})}
                />
            </div>
        </div>

        <div>
            <button className='=submit-btn'>SUBMIT</button>
        </div>

        <div className='extra-details'>
            <p>Don't have an account? </p>
            <p><a href = '/'>forgot password?</a></p>
        </div>
        
    </form>
  )
}

export default Input