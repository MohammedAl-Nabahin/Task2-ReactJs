import React from 'react'

import  SourceBox  from '../../Components/SourceBox';

import { HomeItemsContainer  , Items} from './style';

import {HomeItems} from '../../mock/mock';
import  ItemCard  from '../../Components/ItemCard';


function index() {
  return (
    <HomeItemsContainer>
        <SourceBox home title={"Home and outdoor"} 
        onClick={()=>{}} SourceButton="Source now" />
        <Items>
            {HomeItems.map((item , index) => 
              <ItemCard key={index} title={item.title} price={item.price} src={item.url}  />
            )}
        </Items>
    </HomeItemsContainer>
  )
}

export default index