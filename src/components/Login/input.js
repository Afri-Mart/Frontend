import React, { useState } from 'react'
import './input.css'

function Input() {
    const [ enteredInput, setInput ] = useState('')


const handleChange = (event) => {
    setInput(event.target.value)
    console.log(event.target.value)
}

const handleSubmit = (event) => {
    event.preventDefault();
    if(enteredInput !== ''){
        alert(`WELCOME ${enteredInput}`)
    }
}

  return (
    <form onSubmit = {handleSubmit}>
        <div className='container'>
            <label for='name'>Email: </label>
            <input 
                type = 'text'
                id = 'name'
                value = {enteredInput} 
                onChange = {handleChange}
            />
        </div>

        <div className='container'>
            <label for='password'>Password: </label>
            <input 
                type = 'password'
                id = 'password'
                value = {enteredInput} 
                onChange = {handleChange}
            />
        </div>

        <div>
            <button>SUBMIT</button>
        </div>
        <div>
            <p>Don't have an account? </p>
            <p><a href = '/'>forgot password?</a></p>
        </div>
        
        
    </form>
  )
}

export default Input