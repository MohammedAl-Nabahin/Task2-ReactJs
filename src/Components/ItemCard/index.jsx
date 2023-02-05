import React from 'react'

import { ItemCard , CardTitle} from './style';

function index({title , price , src , alt , id , onClick}) {
  return (
    <ItemCard onClick={onClick}>
      <CardTitle>
        <h3>{title}</h3>
        <span>{price}</span>
      </CardTitle>
      <img src={src} alt={alt} id={id}/>
    </ItemCard>
  )
}

export default index;