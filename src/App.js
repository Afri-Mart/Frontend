import React, { Component } from 'react'
import './App.css';
import Login from './components/Login/login'
class App extends Component {

  state = {
    type: '',
    name: '',
    value: ''
  }
  render() {
    return (
      <div>
        <Login/>
      </div>
    )
  }
}

export default App