import React, { useState } from 'react'
import {Link} from 'react-router-dom';

function CreateAccount() {

    const [newUser, setNewUser] = useState({firstName: '', lastName: '', email: '', password: ''})

    const handleSubmit = (event) => {
        event.preventDefault();
        if(newUser.email !== ''|| newUser.password !== ''|| newUser.firstName!== ''){
            console.log(newUser)
            setNewUser({...newUser,firstName: '',lastName: '', email: '', password: ''})
        }
    }

  return (
    <div>
        <h1>CREATE NEW ACCOUNT</h1>
        <h3>Please fill in the following fields</h3>

        <form onSubmit = {handleSubmit} className='form-group'>
            
                <div className='form-inner'>
                        <label htmlFor='first-name'>First Name: </label>
                        <input 
                            type = 'text'
                            id = 'first-name'
                            placeholder='Enter first name...'
                            value = {newUser.firstName} 
                            onChange = {e => setNewUser({...newUser, firstName: e.target.value})}
                        />
                    </div>

                    <div className='form-inner'>
                        <label htmlFor='last-name'>Last Name: </label>
                        <input 
                            type = 'text'
                            id = 'last-name'
                            placeholder='Enter last name...'
                            value = {newUser.firstName} 
                            onChange = {e => setNewUser({...newUser, firstName: e.target.value})}
                        />
                    </div>

                    <div className='form-inner'>
                        <label htmlFor='email'>Email: </label>
                        <input 
                            type = 'email'
                            id = 'email'
                            placeholder='email@example.com'
                            value = {newUser.email} 
                            onChange = {e => setNewUser({...newUser, email: e.target.value})}
                        />
                    </div>

                    <div className='form-inner'>
                        <label htmlFor='password'>Password: </label>
                        <input 
                            type = 'password'
                            id = 'password'
                            placeholder='Choose a strong password'
                            value = {newUser.password} 
                            onChange = {e => setNewUser({...newUser, password: e.target.value})}
                        />
                    </div>

                    <div className='form-inner'>
                        <label htmlFor='conf-password'>Password: </label>
                        <input 
                            type = 'password'
                            id = 'conf-password'
                            placeholder='Confirm password'
                            value = {newUser.password} 
                            onChange = {e => setNewUser({...newUser, password: e.target.value})}
                        />
                    </div>

            <div>
                <button className='=submit-btn'>CREATE ACCOUNT</button>
            </div>
            <p>Already have an account?<Link to= '' className="nav-link">LogIn</Link></p>

        </form>
        
    </div>
  )
}

export default CreateAccount