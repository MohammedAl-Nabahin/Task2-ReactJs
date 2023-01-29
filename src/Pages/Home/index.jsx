import React from 'react'
import Container from '../../Components/Container/style'
import  HeaderContainer  from '../../Components/Header'
import  DealsContainer  from '../../Sections/Deals'
import  Trending  from '../../Sections/Trending'

function index() {
  return (
    <div>
        <HeaderContainer/>
        <Container>
        <Trending/>
        <DealsContainer/>
        </Container>
    </div>
  )
}

export default index