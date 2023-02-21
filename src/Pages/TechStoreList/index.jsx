import React, { useState } from 'react';

import { PageLinks, TechPage, TechStore  , RightSide , Pagenation , GridTech} from './style';

import Span from '../../Components/Span';
import Icon from '../../Components/Icon';

import rArrow from '../../images/icons/rightArrow.png'; 
import  Aside  from './Components/Aside';
import NumberOfItems from '../../Components/NumberOfItems';
import TechStoreItem from './Components/TechStoreItem';


import ItemGrid from '../../Components/ItemGrid';
import {TechListFlex} from '../../mock/mock';
import {TechListGrid} from '../../mock/mock';
import  HeaderContainer  from '../../Components/Header';
import  FooterContainer  from '../../Components/Footer';
import Container from '../../Components/Container/style';
import Newsletter from '../../Components/Newsletter';
import { Link, Navigate } from 'react-router-dom';

function Index() {
    const [toggle , setToggle] = useState("flex");



    const handleGrid = ()=>{
        setToggle(toggle==="flex" ? "grid" : "grid");
    }

    const handleFlex = ()=>{
        setToggle(toggle==="grid" ? "flex" : "flex");

    }


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
    
                <NumberOfItems  onClickFlex={handleFlex} onClickGrid={handleGrid} 
                  styleGrid={{ backgroundColor: toggle==="grid" ? '#E3E8EE' : 'white' }}
                  styleFlex={{ backgroundColor: toggle==="flex" ? '#E3E8EE' : 'white' }}
                  />
                {toggle==="flex" ? TechListFlex.map((item , index) =>
                    <TechStoreItem key={index} src={item.src} alt="Tech Item" itemTitle={item.itemTitle} price={item.price} 
                    discount={item.discount} info={item.info} id="imgs"
                    />
                )
                    : 
                   
                    <GridTech>
                  {  TechListGrid.map((item , index) =>
                        <ItemGrid key={index} src={item.src} alt="Tech Item" info={item.title} price={item.price} 
                        discount={item.discount}  id="imgs" startsRated={item.startsRated}
                        />
                    )}
                    </GridTech>
                   
            }

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

export default Index;