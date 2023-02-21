import React from 'react';


import Icon from '../../../../../Components/Icon';
import Span from '../../../../../Components/Span';


import styled from 'styled-components';


const SingleAd = styled.div`
    width: 242px;
    height: 48px;
    display: flex;
    flex-direction: row;
    gap: 1em;

    .data{
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .title{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.2px;
        color: #1C1C1C;
    }

    .info{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.2px;
        color: #A9ACB0;
        
    }

    .img{
        display: flex;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: #E3E8EE;
        justify-content: center;
        align-items: center;
        img{
            width: 60%;
            height: 60%;
        }
    }
`;


function index({src , id , data1 , data2}) {
  return (
    <SingleAd>
        <div className='img'>    
        <Icon src={src} id={id}/>
        </div>
        <div className='data'>
            <Span data={data1} className={"title"}/>
            <Span data={data2} className={"info"}/>
        </div>
    </SingleAd>
  )
}

export default index