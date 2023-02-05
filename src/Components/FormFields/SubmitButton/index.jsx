import React from 'react'

import {SubmitButton , BContainer } from './style';

function index({buttonText , type , id , className}) {
  return (
    <BContainer>
        <SubmitButton type={type} id={id} className={className}>
            {buttonText}
        </SubmitButton>
    </BContainer>
  )
}

export default index;