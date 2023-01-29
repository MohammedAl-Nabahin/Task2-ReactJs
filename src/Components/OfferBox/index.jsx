import React from 'react'

import OfferBox from './style';

function index({orange , offerText , id}) {
  return (
    <OfferBox orange={orange} id={id}>
        <span>
        {offerText}
        </span> 
    </OfferBox>
  )
}

export default index