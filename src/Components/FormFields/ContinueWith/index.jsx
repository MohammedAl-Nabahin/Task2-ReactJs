import React from 'react'

import ContinueButton from './style';
import Icon from '../../Icon';

function index({iconId , id , text , src , alt , google}) {
  return (
    <ContinueButton id={id} google={google}>
        <Icon src={src} id={iconId} alt={alt}/>
        <span>{text}</span>
    </ContinueButton>
  )
}

export default index