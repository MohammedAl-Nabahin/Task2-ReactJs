import React from 'react';

import Logo from '../Logo';
import NavIcon from '../NavIcon';

import styled from 'styled-components';

import profile from '../../images/icons/person.png';
import chat from '../../images/icons/chat.png';
import fav from '../../images/icons/favorite.png';
import cart from '../../images/icons/shopping-cart.png';

const HeaderSectionOne = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 0.1em solid #E3E8EE;
    width: 100%;
    background-color: white;

    #headerList {
        display: flex;
        gap: 1em;
        width: 100%;
    }

 
`;

const InnerContainer = styled.div`
    /* width: 1190px; */
    width: 77.5%;
    display: flex;
    flex: row;
    justify-content: space-between;
    align-items: center;
    gap:20px;
`;

const SettingsNav = styled.nav`
    display: flex;
    /* display: grid; */
    flex-direction: row;
    /* grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr; */

    gap: 1em;
    /* width: 100%; */
    /* width: 50%; */
    overflow: hidden;
    flex-wrap: nowrap;
   
`;


const NavList= styled.ul`
        list-style: none;
        display: flex;
        flex-direction: row;
        /* width: 10%; */
        gap: 2em;

        a{
        text-decoration: none;
    }
`;


function index() {
  return (
    <HeaderSectionOne>
            
    <InnerContainer>

    
        <Logo/>

        {/* <SearchBar/> */}

        <SettingsNav>
            <NavList id='headerList'>
                <NavIcon src={profile} alt="profile" id="profileIcon" iconTitle="Profile" className={"navImgs"}/>
                <NavIcon src={chat} alt="chat" id="chatIcon" iconTitle="Message" className={"navImgs"}/>
                <NavIcon src={fav} alt="orders" id="favIcon" iconTitle="Orders" className={"navImgs"}/>
                <NavIcon src={cart} alt="cart" id="cartIcon" iconTitle="My cart" className={"navImgs"}/>
            </NavList>
        </SettingsNav>
    </InnerContainer>
</HeaderSectionOne>
  )
}

export default index