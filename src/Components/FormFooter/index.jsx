import React from 'react';

import visa from '../../images/icons/Visa.png';
import payoner from '../../images/icons/payoner.png';
import paypal from '../../images/icons/paypal.png';
import payment from '../../images/icons/payment.png';


import styled from 'styled-components';

const FormFooter = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    /* height: 74px; */
    align-items: center;
    justify-content: space-around;
    background-color: white;
    /* margin-top: 74px; */

    .payment{
        display: flex;
        flex-direction: row;
        gap: 1em;
        cursor: pointer;
        list-style: none;
    }

`;


function index() {
  return (
    <FormFooter>
        <div>
            <ul className='payment'>
                <li><img src={visa} alt="pay" id="1"/></li>
                <li><img src={payoner} alt="pay" id="2"/></li>
                <li><img src={paypal} alt="pay" id="3"/></li>
                <li><img src={payment} alt="pay" id="4"/></li>
            </ul>
        </div>

        <div>
            <ul className='payment'>
                <li>Support</li>
                <li>Privacy & Cookies</li>
                <li>Accessibility</li>
            </ul>
        </div>
    </FormFooter>
  )
}

export default index