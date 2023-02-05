import React from 'react'

import { SourceBox } from './style';

function index({title , SourceButton , onClick , home}) {
  return (
    <SourceBox home={home}>
        <div className='sourceTitle'>{title}</div>

        <button className='sourceButton' onClick={onClick}>{SourceButton}</button>
    </SourceBox>
  )
}

export default index;