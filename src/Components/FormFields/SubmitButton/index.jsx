import React from 'react'

import {SubmitButton , BContainer } from './style';

function index({buttonText , type , id , className , onClick}) {
  return (
    <BContainer>
        <SubmitButton type={type} id={id} className={className} onClick={onClick}>
            {buttonText}
        </SubmitButton>
    </BContainer>
  )
}

export default index;