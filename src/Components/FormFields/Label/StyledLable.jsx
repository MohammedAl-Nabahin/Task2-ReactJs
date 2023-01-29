import React from 'react'

import StyledLabel from './style';

function Label({labelText , htmlFor}) {
  return (
    <>
        <StyledLabel htmlFor={htmlFor}>
            {labelText}
        </StyledLabel>
    </>
  )
}

export default Label