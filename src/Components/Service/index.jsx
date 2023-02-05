import React from 'react';

import { Service , ServiceIcon , Title} from './style';

import Icon from '../Icon';

function index({imgSrc , imgAlt , imgId , src, alt , id , title}) {
  return (
    <Service>
        <img src={imgSrc} id={imgId} alt={imgAlt}/>
        <ServiceIcon>
            <Icon src={src} alt={alt} id={id}/>
        </ServiceIcon>
        <Title>
           <span>
              {title}
            </span> 
        </Title>
    </Service>
  )
}

export default index;