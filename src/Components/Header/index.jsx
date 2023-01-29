import React from 'react'

//components
import Logo from '../Logo';
import  SearchBar  from '../SearchBar';
import NavIcon from '../NavIcon';
// import { MyCategorySelect } from '../SearchBar/style';


//styles
import { HeaderContainer , HeaderSectionOne  , HeaderSectionTwo , SettingsNav , NavPages, NavList, NavItem , Ship} from './style';


//images
import profile from '../../images/icons/person.png';
import chat from '../../images/icons/chat.png';
import fav from '../../images/icons/favorite.png';
import cart from '../../images/icons/shopping-cart.png';
import menu from '../../images/icons/menu.png';
import germany from '../../images/icons/germany.svg';
// import Container from '../Container/style';



function index() {
  return (
      <HeaderContainer>   
        {/* <Container> */}
        <HeaderSectionOne>
            
            <Logo/>

            <SearchBar/>

            <SettingsNav>
                <NavList id='headerList'>
                    <NavIcon src={profile} alt="profile" id="profileIcon" iconTitle="Profile" className={"navImgs"}/>
                    <NavIcon src={chat} alt="chat" id="chatIcon" iconTitle="Message" className={"navImgs"}/>
                    <NavIcon src={fav} alt="orders" id="favIcon" iconTitle="Orders" className={"navImgs"}/>
                    <NavIcon src={cart} alt="cart" id="cartIcon" iconTitle="My cart" className={"navImgs"}/>
                </NavList>
            </SettingsNav>

        </HeaderSectionOne>
        {/* </Container> */}

        <HeaderSectionTwo>
            <NavPages>
                <NavList>
                    <NavItem id='menuItem'>
                        <img src={menu} alt="menu" id="menu"/>
                        <span>
                            All Category
                        </span>
                    </NavItem>
                    <NavItem>Hot Offers</NavItem>
                    <NavItem>Gift boxes</NavItem>
                    <NavItem>Projects</NavItem>
                    <NavItem>Menu item </NavItem>
                    <NavItem>
                            {/* <MyCategorySelect> */}
                            <select className='help'>
                                <option value="Help">Help</option>
                            </select>
                            {/* </MyCategorySelect> */}
                    </NavItem>
                </NavList>
            </NavPages>

            <NavList>
                <div>
                    <select className='navSelect'>
                        <option value={"English,USD"}>English,USD</option>
                    </select>
                </div>
                <Ship>
                    {/* <select> */}
                            Ship to     
                            <img src={germany} alt="country" id='ship'/>
                            {/* <i class="arrow down"></i>
                             */}
                             <span>&or;</span>
                    {/* </select> */}
                </Ship>
            </NavList>
        </HeaderSectionTwo>
    </HeaderContainer>
   
  )
}

export default index;