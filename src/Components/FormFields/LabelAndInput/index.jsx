import React from 'react';

import FormInput from '../FormInput/index';
import Label from '../Label/StyledLable';
import InputContainer from './style';

function index({htmlFor , labelText , placeholder , value , id , name , type , onClick , containerId , onChange}) {
  return (
    <InputContainer id={containerId}>
        <Label htmlFor={htmlFor} labelText={labelText}/>
        <FormInput  placeholder={placeholder} value={value} id={id} name={name} onClick={onClick} type={type} onChange={onChange}/>
    </InputContainer>
  )
}

export default index;