import React from 'react';

import Icon from '../../Components/Icon';
import Span from '../../Components/Span';

import styled from 'styled-components';

import rating from '../../images/icons/rating.png';

import Like from '../../Pages/TechStoreList/Components/Like';


const GridItem = styled.div`
    width: 296px;
    height: 380px;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    gap: 10px;
    border: 1px solid #E4E4E3;
    border-radius:6px;
`;

const ItemPic = styled.div`
    align-items: center;
    justify-content: center;
    img{
        width: 70%;
    }

`;


const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    padding: 15px 20px;
    gap: 10px;

    #likecart{
        position: absolute;
        bottom: 85px;
        right: 20px;
    }
   
    
`;


const Price = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;

    h2{
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: -0.2px;
        color: #1C1C1C;
        padding: 0;
        margin: 0;
    }

    span{
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        text-decoration-line: line-through;
        color: #8B96A5;
    }

`;

const Rating = styled.div`
        display: flex;
        flex-direction:row;
        align-items: center;
        gap: 5px;

        .myStars{
            display: flex;
            padding: 0;
            margin: 0;
        }

        .gold{
            color:gold;
            padding: 0 4px;
        }

`;

const ItemTitle = styled.div`
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.2px;
        color: #606060;
        width: 70%;
`;


function index({src , id , price , discount , startsRated , info}) {
  return (
    <GridItem>
        <ItemPic>
                <Icon src={src} alt="itempic" id={id}/>
        </ItemPic>

        <ItemInfo>
            <Price>
                <h2>{price}</h2>
                <span>{discount}</span>
            </Price>

            <Rating>
            <span className="myStars">
                 <Icon src={rating} alt="rating" id='star'/>
                    <Span className={"gold"} data={startsRated}/>
                </span>
            </Rating>

            <ItemTitle>
                {info}
            </ItemTitle>
              
        <Like id={"likecart"}/>
        </ItemInfo>
      

    </GridItem>
  )
}

export default index;