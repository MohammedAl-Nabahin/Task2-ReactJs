import React from 'react'
import {FormInput} from '../FormInput/style';

import MyPassword from './style';

function index({src , type , onClick}) {
  return (
    <MyPassword>
        <FormInput placeholder='Type Here' id='passwordIn' type={type}/>
        <img src={src}
        width={"40em"}
        alt='img' onClick={onClick}/>
    </MyPassword>
  )
}

export default index;