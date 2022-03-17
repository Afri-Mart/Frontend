import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
//import { Link } from 'react-router-dom';
//import LoginForm from './components/Login/login'
import Header from './components/Header/Header';
import NavBar from './components/Header/NavBar';
import Products from './components/Products/products';

function App () {

    return (
      <BrowserRouter>
          {/*<SearchIcon />*/}
          <Header />
          <NavBar/>
          {/* <LoginForm/> */}
          <Products />
      </BrowserRouter>
    )
    
}

export default App