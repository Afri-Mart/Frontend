import React, { useState } from 'react'
import LoginForm from './loginForm'

function Login() {

    const [user, setUser] = useState({email: '', password: ''});
    const [error,  setError] = useState('');

    const testUser ={
        email: "admin@gmail.com",
        password: "kosiso"
    }

    const logIn = user => {
        if(user.email === testUser.email && user.password === testUser.password){
            setUser({
                email: user.email,
                password: user.password
            })
            //console.log(user)
        }else
            //console.log('deets dont match')
            setError('Details do not match')  
    }

    const logOut = () => {
        setUser({email: '', password: ''})
        setError('')
    }

  return (
    <div>
        {(user.email !== '') ? 
            <div>
                <h2>WELCOME {user.email}</h2>
                <button onClick = {logOut}>LOGOUT</button>
            </div>
            :
            <LoginForm logIn ={logIn} logOut = {logOut} error={error}/>
        }
    </div>
  )
}

export default Login