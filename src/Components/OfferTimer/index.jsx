import React from 'react';
import styled from 'styled-components';



const OfferTimer = styled.div`
    display: flex;
    flex-direction: column;
    width: 45px;
    height: 50px;
    background: #606060;
    border-radius: 4px;
    color: white;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    justify-content: center;

    h4{
      padding:0;
      margin: 0;
      font-weight: bold;
      font-size: 15px;
    }
`;

function index({time , timeText}) {
  return (
    <OfferTimer>
        <h4>{time}</h4>
        <span>{timeText}</span>
    </OfferTimer>
  )
}

export default index