import React from 'react'

import Container from './style';

function index({children}) {
  return (
    <Container>
        {children}
    </Container>
  )
}

export default index