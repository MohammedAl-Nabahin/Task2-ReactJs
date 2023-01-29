import React from 'react'

import {FormInput} from '../FormInput/style'
import Label from '../Label/StyledLable'

import MyCheckInput from './style';

function index({htmlFor , labelText , placeholder , value , id , name , type , onClick , containerId}) {
  return (
    <MyCheckInput>
           <Label htmlFor={htmlFor} labelText={labelText}/>
        <FormInput  placeholder={placeholder} value={value} id={id} name={name} onClick={onClick} type={type}/>
    </MyCheckInput>
  )
}

export default index;