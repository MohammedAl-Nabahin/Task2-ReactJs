import React from 'react'

import { ItemPage  , RContainer , RItem , AllItems , IContainer} from './style'

import ShowItemSection from '../../Sections/ShowItemSection';
import Icon from '../../Components/Icon';

import shop from '../../images/backgrounds/shopNow.png';


import {RelatedItems} from '../../mock/mock';
import  HeaderContainer  from '../../Components/Header';
// import Container from '../../Components/Container';
import  FooterContainer  from '../../Components/Footer';
import  ItemDetailsBox  from '../../Sections/ItemDetails';
import MayLike from '../../Sections/MayLike';

function index() {
  return (
    <>
    <HeaderContainer/>
    <IContainer>
    <ItemPage>
        <ShowItemSection/>
        <div className='side'>
        <ItemDetailsBox/>
        <MayLike/>
        </div>
        <RContainer>
            <h2>Related Items</h2>
            <AllItems className='rContainer'>
                {RelatedItems.map((item , index) =>
                <RItem key={index} className="rItem">
                    <Icon src={item.url}/>
                    <p>{item.title}</p>
                    <span>{item.price}</span>
                </RItem>
                )}
            </AllItems>
        </RContainer>
        <div className='shop'>
          <img src={shop} alt="shop" id='shop'/>
        </div>
    </ItemPage>
    
    </IContainer>
    <FooterContainer/>
    </>
  )
}

export default index