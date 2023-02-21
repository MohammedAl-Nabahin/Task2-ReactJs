import React from 'react';
import Container from '../../Components/Container';

import TopHeader from '../../Components/TopHeader';
import MyCart from './Components/MyCart';
import Coupon from './Components/Coupon';
import Checkout from './Components/Checkout';
import Ads from './Components/Ads';


import {Cart , MyCartBox , Check} from './style';

import { useProductContext } from '../../contexts/productContext';


function Index() {
  const { state } = useProductContext();


  return (
    <Cart>
        <TopHeader/>
        <Container>
            <h3>My Cart ({state?.products?.length})</h3>
            <MyCartBox>
              <MyCart/>
            <Check>
              <Coupon/>
              <Checkout/>
            </Check>
            </MyCartBox>
            <Ads/>
        </Container>
    </Cart>
  )
}

export default Index