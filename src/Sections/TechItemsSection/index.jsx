import React from 'react'

import {TechItem} from '../../mock/mock';

import { TechItems , Items } from './style';

import SourceBox from '../../Components/SourceBox';
import  ItemCard from '../../Components/ItemCard';

function index() {
  return (
    <TechItems>
         <SourceBox title={"Consumer electronics and gadgets"} 
        onClick={()=>{}} SourceButton="Source now"/>
        <Items>
            {TechItem.map((item , index) => 
              <ItemCard key={index} title={item.title} price={item.price} src={item.url}  />
            )}
        </Items>
    </TechItems>
  )
}

export default index