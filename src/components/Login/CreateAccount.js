import React, { useState } from 'react'

function CreateAccount() {

    const [newUser, setNewUser] = useState({fullName: '', email: '', password: ''})

    const handleSubmit = (event) => {
        event.preventDefault();
        if(newUser.email !== ''|| newUser.password !== ''|| newUser.fullName!== ''){
            console.log(newUser)
            setNewUser({...newUser,fullName: '', email: '', password: ''})
        }
    }

  return (
    <div>
        <h1>CREATE NEW ACCOUNT</h1>
        <h3>Please fill in the following fields</h3>

        <form onSubmit = {handleSubmit}>
            
            <div className='form-group'> 

            <div className='form-inner'>
                    <label htmlFor='name'>Full Name: </label>
                    <input 
                        type = 'text'
                        id = 'name'
                        placeholder='Enter full name...'
                        value = {newUser.fullName} 
                        onChange = {e => setNewUser({...newUser, fullName: e.target.value})}
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

            </div>

            <div>
                <button className='=submit-btn'>CREATE ACCOUNT</button>
            </div>
        </form>
    </div>
  )
}

export default CreateAccount