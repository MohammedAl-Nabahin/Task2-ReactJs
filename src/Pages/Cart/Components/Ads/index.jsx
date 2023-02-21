import React from 'react';

import { Ads } from './style';

import SingleAd from './SingleAd';

//imgs
import lock from '../../../../images/icons/lock.png';
import chat from '../../../../images/icons/chat.png';
import van from '../../../../images/icons/delivery.png';


function index() {
  return (
    <Ads>
        <SingleAd src={lock} data1="Secure payment" data2={"Have you ever finally just "}/>
        <SingleAd src={chat}  data1="Customer support" data2={"Have you ever finally just "}/>
        <SingleAd src={van}  data1="Free delivery" data2={"Have you ever finally just "}/>
    </Ads>
  )
}

export default index