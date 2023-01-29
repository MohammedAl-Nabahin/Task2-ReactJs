import React from 'react'

import NavIcon from './style';

function index({src , alt , id , iconTitle , className}) {
  return (
    <NavIcon>
        <img src={src} alt={alt} id={id} className={className}/>
        <span id='iconTitle'>{iconTitle}</span>
    </NavIcon>
  )
}

export default index