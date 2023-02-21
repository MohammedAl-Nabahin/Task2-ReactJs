import React from 'react';

import styled from 'styled-components';

import Icon from '../../../../Components/Icon';

import like from '../../../../images/icons/like.png';

const Like = styled.div`
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        border: 2px solid #E4E4E3;
        border-radius: 6px;
`;

function index({id}) {
  return (
    <Like id={id}>
        <Icon src={like}/>
    </Like>
  )
}

export default index