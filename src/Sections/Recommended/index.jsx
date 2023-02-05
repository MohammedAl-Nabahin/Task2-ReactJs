import React from 'react';

import { RecommendedContainer , RecommendedSection } from './style';

import RecommendedItem from '../../Components/RecommendedItem';

import {RecommendedItems} from '../../mock/mock';

function index() {
  return (
    <RecommendedContainer>
        <h2>Recommended items</h2>

        <RecommendedSection>
        {RecommendedItems.map((item , index) => 
              <RecommendedItem key={index} descreption={item.descreption} price={item.price} src={item.url} alt="item" /> //need id!
            )}
        </RecommendedSection>
    </RecommendedContainer>
  )
}

export default index;