import React from 'react'
import { Link } from 'react-router-dom';

import FormLink from './style';

function index({LinkText , goTo , to}) {
  return (
    <FormLink>
        {LinkText}
        <Link to={to} className="myLink">
        <span>{goTo}</span>
            </Link>
            
    </FormLink>
  )
}

export default index;