import React from 'react'

import {SubmitButton , BContainer } from './style';

function index({buttonText , type , id}) {
  return (
    <BContainer>
        <SubmitButton type={type} id={id}>
            {buttonText}
        </SubmitButton>
    </BContainer>
  )
}

export default index;