import React from 'react';

import styled from 'styled-components';

const Region = styled.div`
    display: flex;
    flex-direction: row;
    width: 221px;
    height: 36px;
    justify-content: flex-start;
    gap: 11px;
    align-items: center;
    cursor: pointer;

    img{
        width: 12%;
        height: 55%;
    }
`;

const CountryName = styled.div`
    display: flex;
    flex-direction: column;

    h4{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.2px;
        color: #1C1C1C;
        margin: 0;
    }

    span{
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: #8B96A5;
    }

`;

function index({src , id , alt , countryName , domain , onClick}) {
  return (
    <Region onClick={onClick}>
        <img src={src} alt={alt} id={id}/>
        <CountryName>
            <h4>{countryName}</h4>
            <span>{domain}</span>
        </CountryName>
    </Region>
  )
}

export default index;