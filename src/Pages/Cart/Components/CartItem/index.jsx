import React from 'react';


import Icon from '../../../../Components/Icon';
import Span from '../../../../Components/Span';


import { CartItem} from './style';

const Qty = [];


for(let i=0; i<=50; i++){
    Qty.push(i)
}



function index() {
  return (
    <CartItem>
        <Icon/>
        <div>
            <div>
                <Span/>
                <Span/>
                <div>
                </div>
            </div>
            <div>
                <Span/>
                <select>
                   {Qty.map((item,index)=>
                    <option key={index}>{item}</option>
                   )}
                </select>
            </div>
        </div>

      
    </CartItem>
  )
}

export default index