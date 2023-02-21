import React from 'react';

import AddButton from './style';

import cart from '../../images/icons/cart.png';




function index({onClick}) {
  return (
    <AddButton onClick={onClick}>
       <img src={cart} alt=""/>
    </AddButton>
  )
}

export default index