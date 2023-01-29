import React from 'react';

import styled from 'styled-components';

const OfferCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 179px;
    height: 240px;
    border-right: 1px solid #BBBCBE;
    justify-content: center;
    align-items: center;
    gap: 0.4em;
    cursor: pointer;

    #discount{
        width: 61px;
        height: 28px;
        background: #FFE3E3;
        border-radius: 29px;
        color: red;
        text-align: center;

    }

    img{
      &:hover{
        width: 150px;
        height: 150px;
      }
    }

  
`;

function index({cardTitle , discount , src , alt , id , onClick}) {
  return (
    <OfferCard onClick={onClick}>
        <img src={src} alt={alt} id={id}/>
        <span>{cardTitle}</span>
        {/* <div> */}
        <span id='discount'>{discount}</span>
        {/* </div> */}
    </OfferCard>
  )
}

export default index