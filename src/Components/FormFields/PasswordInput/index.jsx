import React from 'react'
import {FormInput} from '../FormInput/style';

import MyPassword from './style';

function index({src , type , onClick , value , onChange}) {
  return (
    <MyPassword>
        <FormInput placeholder='Type Here' id='passwordIn' type={type} value={value} onChange={onChange}/>
        <img src={src}
        width={"40em"}
        alt='img' onClick={onClick}/>
    </MyPassword>
  )
}

export default index;