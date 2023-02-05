import React from 'react';


import Logo from '../Logo';
import Icon from '../Icon';
import List from './List'

import facebook from '../../images/icons/facebook2.png';
import twitter from '../../images/icons/twitter.png';
import linkedIn from '../../images/icons/linkedin.png';
import instagram from '../../images/icons/instagram.png';
import youtube from '../../images/icons/youtube3.png';
import apple from '../../images/icons/appStore.png';
import google from '../../images/icons/googlePlay.png';
import usa from '../../images/countries/usa.png';





import { FooterContainer  , UpperFooter , LowerFooter} from './style';

function index() {
  return (
    <FooterContainer>
        <UpperFooter>
            <div className='brand'>
                <Logo/>
                <p>
                Best information about the company gies here but now lorem ipsum is
                </p>
                    <ul>
                        <li><Icon src={facebook}/></li>
                        <li><Icon src={twitter}/></li>
                        <li><Icon src={linkedIn}/></li>
                        <li><Icon src={instagram}/></li>
                        <li><Icon src={youtube}/></li>

                    </ul>
            </div>

            <List listTitle={"About"} listItem1="About Us" listItem2={"Find Store"} listItem3="Categories" listItem4={"Blogs"}/>
            <List listTitle={"Partnership"} listItem1="About Us" listItem2={"Find Store"} listItem3="Categories" listItem4={"Blogs"}/>
            <List listTitle={"Information"} listItem1="Help Center" listItem2={"Money Rfund"} 
            listItem3="Shipping" listItem4={"Contact us"}/>
            <List listTitle={"For users"} listItem1="Login" listItem2={"Register"} listItem3="Settings" listItem4={"My Orders"}/>

            <div className='getApp'>
                <h3>Get App</h3>
                <Icon src={apple}/>
                <Icon src={google}/>
            </div>

        </UpperFooter>

        <LowerFooter>
            <span>© 2023 Ecommerce.</span>
            <div>
                <Icon src={usa}/>
                <span>English &#8963;</span>
            </div>
        </LowerFooter>
    </FooterContainer>
  )
}

export default index;