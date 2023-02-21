import React from 'react'
import { NavLink } from 'react-router-dom';

import NavIcon from './style';

function index({src , alt , id , iconTitle , className , to}) {
  return (
    <NavLink to={to}>
      <NavIcon>
          <img src={src} alt={alt} id={id} className={className}/>
          <span id='iconTitle'>{iconTitle}</span>
      </NavIcon>
    </NavLink>
  )
}

export default index