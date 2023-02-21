import React, { useEffect } from 'react';

import Span from '../../../../Components/Span';
import SubmitButton from '../../../../Components/FormFields/SubmitButton';
import Icon from '../../../../Components/Icon';

import { WaysToPay } from '../../../../mock/mock';

import {Checkout , Prices , PricesBox , Total , Pay} from './style';
import { useState } from 'react';

function Index() {
    const [subtotal , setSubtotal] = useState(0);
    const [discount , setDiscount] = useState(0);
    const [total , setTotal] = useState(0);

    const Tax = 14.00; 

    const getTotal = ()=>{
        setTotal((subtotal+Tax) - discount)
    }
    
    const checkout= ()=>{
        setDiscount(0)
        setSubtotal(0)
        setTotal(0)
    }
   
  return (
    <Checkout>
        <PricesBox>
            <Prices>
                <Span data={"Subtotal:"} className="Pname"/>
                <Span data={"+$"+subtotal} onChange={getTotal} className="sTotal"/>
            </Prices>

            <Prices>
                <Span data={"Discount:"} className="Pname"/>
                <Span data={"-$"+discount} className="discount"/>
            </Prices>

            <Prices>
                <Span data={"Tax:"} className="Pname"/>
                <Span data={"+$"+Tax} className="tax"/>
            </Prices>
        </PricesBox>

        <Total>
            <Span data={"Total"} className="total"/>
            <Span data={total} className="totalNum"/>
        </Total>

        <SubmitButton buttonText={"Checkout"} id="checkout" type={"submit"} onClick={checkout}/>

        <Pay>
            {WaysToPay.map((item,index)=>
            <Icon src={item.src} id="pays"/>
            )}
        </Pay>
    </Checkout>
  )
}

export default Index;