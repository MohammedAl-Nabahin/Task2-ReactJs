import React from 'react'

import {FormInput , Father} from './style';

export default function index({placeholder , id , value , type , name , onClick , className , childern}) {
  return (
    <Father>
        {childern}
        <FormInput placeholder={placeholder} id={id} value={value} type={type} name={name} onClick={onClick} className={className}/>
    </Father>
  )
}
