import React from 'react';
import { NavLink } from 'react-router-dom';

import {TechItem  ,ItemData , Price , Rating} from './style';

import Icon from '../../../../Components/Icon';
import Span from '../../../../Components/Span';
import Like from '../Like';

import rating from '../../../../images/icons/rating.png';

function index({src , alt , id , itemTitle , price , discount , info , orders}) {
  return (
    <TechItem>
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

            <NavLink to={"/test"}>
                <Span data="View Details" className={"view"}/>
            </NavLink>
        </ItemData>

        <Like id="like"/>

    </TechItem>
  )
}

export default index;