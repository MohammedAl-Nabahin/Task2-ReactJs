import React from 'react';

import {MyRegions , RegoinsContainer} from './style';

import {Regions} from '../../mock/mock';
import Regoin from '../../Components/Region';

function index() {
  return (
    <RegoinsContainer>
        <h2>Suppliers by region</h2>
        <MyRegions>
            {Regions.map((item , index)=>
                <Regoin key={index} id={item.id} src={item.flag} countryName={item.country} domain={item.domain} alt="regoin"/>
            )}
         </MyRegions>
    </RegoinsContainer>
        

  )
}

export default index