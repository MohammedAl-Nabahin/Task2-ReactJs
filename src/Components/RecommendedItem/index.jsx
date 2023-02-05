import React from 'react';

import styled from 'styled-components';



function index({src , alt , id , price , descreption}) {
  return (
    <RItem>
        {/* <div></div> */}
        <img src={src} id={id} alt={alt}/>
        <span id="price">{price}</span>
        <span id="info">{descreption}</span>
    </RItem>
  )
}

export default index;


const RItem = styled.div`
    width: 220px;
    height: 310px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border: 1px solid #E4E4E4;
    justify-content: center;
    padding:0  1em;
    border-radius: 3px;

    #price{
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: #1C1C1C;
    }

    #info{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.2px;
        color: #8B96A5;
        width:170px;
    }

`;
