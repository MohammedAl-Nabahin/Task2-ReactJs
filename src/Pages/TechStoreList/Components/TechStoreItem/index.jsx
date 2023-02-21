import React from 'react';
import { NavLink } from 'react-router-dom';

import {TechItem  ,ItemData , Price , Rating} from './style';


import Icon from '../../../../Components/Icon';
import Span from '../../../../Components/Span';
import Like from '../Like';

import rating from '../../../../images/icons/rating.png';
import AddButton from '../../../../Components/AddToCartBtn';

import  {useProductContext}  from '../../../../contexts/productContext';


function Index({src , alt , id , itemTitle , price , discount , info , itemId }) {

   
        const {
          state: { products },
          addToCart,
          removeFromCart,
        } = useProductContext();
      
        const isExistInCart = () => products.find((item) => item.id === id);
      
        const toggleCart = () => {
          isExistInCart() ? removeFromCart(id) : addToCart(src,itemTitle,price);
        };
      
  return (
    <TechItem id={itemId}>
        <Icon src={src} alt={alt} id={id}/>

        <ItemData>
            <h3>{itemTitle}</h3>
            <Price>    
                <h2>{price}</h2>
                <Span data={discount}/>
            </Price>

            <Rating>
               <span className="myStars">
                 <Icon src={rating} alt="rating" id='star'/>
                    <Span className={"gold"} data="7.5"/>
                </span>
                <div className='divider'></div>
                <Span data="154 orders" className="orders"/>
                <div className='divider'></div>
                <Span className='green' data="Free Shipping"/>
            </Rating>

            <p>
                {info}
            </p>
            <div id='viewAndAdd'>
                <NavLink to={"/Item"}>
                    <Span data="View Details" className={"view"}/>
                </NavLink>

                <AddButton onClick={toggleCart}/>
            </div>
        </ItemData>

        <Like id="like"/>

    </TechItem>
  )
}

export default Index;