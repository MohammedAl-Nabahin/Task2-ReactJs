import React from 'react'
// import {Link, Navigate} from 'react-router-dom';
// import FormInput from '../FormInput/style';

import Label from '../../Label/StyledLable'

import PasswordInput from './style' ;

function index({labelText , htmlFor , onClick , placeholder , type , id , value}) {
  return (
    
    <PasswordInput>
        <Label labelText={labelText} htmlFor={htmlFor}/>
        {/* <Navigate to="/asdh"> */}
            <span onClick={onClick}>Forgot Password</span>
        {/* </Navigate> */}
    </PasswordInput>
    
       
  )
}

export default index;