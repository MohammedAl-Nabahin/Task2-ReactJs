import React from 'react';

import { PageLinks, TechPage, TechStore  , RightSide , Pagenation} from './style';

import Span from '../../Components/Span';
import Icon from '../../Components/Icon';

import rArrow from '../../images/icons/rightArrow.png'; 
import  Aside  from './Components/Aside';
import NumberOfItems from '../../Components/NumberOfItems';
import TechStoreItem from './Components/TechStoreItem';

import {TechListFlex} from '../../mock/mock';
import  HeaderContainer  from '../../Components/Header';
import  FooterContainer  from '../../Components/Footer';
import Container from '../../Components/Container/style';
import Newsletter from '../../Components/Newsletter';

function index() {
  return (
    <>
    
    <HeaderContainer/>
    <TechStore>
        <Container>
        <PageLinks>
            <div>
                <Span data="Home"/>
                <Icon src={rArrow}/>
                <Span data="Clothings"/>
                <Icon src={rArrow}/>
                <Span data="Men's wear"/>
                <Icon src={rArrow}/>
                <Span data="Summer clothing"/>
                <Icon src={rArrow}/>
            </div>
        </PageLinks>

        <TechPage>
            <Aside/>
            <RightSide>
                <NumberOfItems/>
                {TechListFlex.map((item , index) =>
                    <TechStoreItem key={index} src={item.src} alt="Tech Item" itemTitle={item.itemTitle} price={item.price} 
                    discount={item.discount} info={item.info} id="imgs"
                    />
                )}

                <Pagenation/>
            </RightSide>
        </TechPage>
        </Container>
    </TechStore>
        <Newsletter/>
        <FooterContainer/>
    </>
  )
}

export default index;