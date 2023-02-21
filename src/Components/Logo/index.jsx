import React from 'react'


import Logo from './style';

import logo from '../../images/icons/logo.svg';
import { Link } from 'react-router-dom';


function index() {
  return (
    
        <Logo>
             <Link to={"/"} id="logoLink">
      <img src={logo} alt="logo" id='mylogo'/>


      <h1 id='brand'>Brand</h1>
    </Link>
</Logo>
 
    
  )
}

export default index