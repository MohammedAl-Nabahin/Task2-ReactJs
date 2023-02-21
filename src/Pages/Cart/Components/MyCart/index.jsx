import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from '../../../../Components/Icon';
import SubmitButton from '../../../../Components/FormFields/SubmitButton';

import { MyCart , CartFooter } from './style';

import backArrow from '../../../../images/icons/arrow_back.png';


import { useProductContext } from '../../../../contexts/productContext';
import  TechStoreItem  from '../../../TechStoreList/Components/TechStoreItem';



function Index() {
  const { state  , removeFromCart} = useProductContext();

  return (
    <MyCart>

    {!state.products.length && 'No Products in the cart'}
      <ul>
        {state?.products?.map((product , index) => (
          <TechStoreItem key={product.id} src={product.src} itemTitle={product.itemTitle} price={product.price} />
        ))}
      </ul>

          <CartFooter>
                <NavLink to={"/Tech"}>
                    <SubmitButton buttonText={<><Icon src={backArrow} id="back"/><span>Back to shop</span></>} id="backBtn"/>
                </NavLink>
                <SubmitButton buttonText={"Remove all"} id="remove" onClick={removeFromCart} />
        </CartFooter>
    </MyCart>
  )
}

export default Index