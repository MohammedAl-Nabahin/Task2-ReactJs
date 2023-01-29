import React from 'react'


import Logo from './style';

import logo from '../../images/icons/logo.svg';


function index() {
  return (
    <Logo>

        <img src={logo} alt="logo" id='mylogo'/>

   
         <h1 id='brand'>Brand</h1>
      
    </Logo>
  )
}

export default index