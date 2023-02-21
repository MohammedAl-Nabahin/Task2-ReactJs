import React from 'react';

//style
import {MayLike , Item , Info , SigleItem} from './style';

//Components
import Icon from '../../Components/Icon';
import Span from '../../Components/Span';

//data
import {YouMayLikeItems} from '../../mock/mock';

function index() {
  return (
    <MayLike>
        <h3>You May Like</h3>
        <Item>
            {YouMayLikeItems.map((item)=>
            <SigleItem>
                <Icon src={item.src}/>
                <Info key={item.id}>
                    <span className={"title"}>{item.title}</span>
                    <span className={"price"}>{item.price}</span>
                </Info>
            </SigleItem>
            )}
           
        </Item>
    </MayLike>
  )
}

export default index