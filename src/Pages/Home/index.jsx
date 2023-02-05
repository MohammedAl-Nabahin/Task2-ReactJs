import React from 'react';


import  Container from '../../Components/Container';
import  HeaderContainer  from '../../Components/Header';
import  DealsContainer  from '../../Sections/Deals';
import  Trending  from '../../Sections/Trending';


import styled from 'styled-components';
import HomeItemsContainer  from '../../Sections/HomeAndOutdoor';
import TechItems from '../../Sections/TechItemsSection';
import  Supplies from '../../Sections/SendRequestSection';
import  RecommendedContainer  from '../../Sections/Recommended';
import  ServicesSection  from '../../Sections/ExtraServices';
import  RegoinsContainer  from '../../Sections/RegoinsSection';
import Newsletter from '../../Components/Newsletter'
import  FooterContainer  from '../../Components/Footer';


const Home = styled.div`
        background-color:#F7FAFC;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap:3em;
        height: fit-content;
        margin-bottom: 63px;
`;


// const Father = styled.div`
//     width: 100%;

// `;




function index() {
  return (
    <>
    <HeaderContainer/>
    <Home>  
        <Container>
          <Trending/>
          <DealsContainer/>
          <HomeItemsContainer/>
          <TechItems/>
          <Supplies/>
          <RecommendedContainer/>
          <ServicesSection/>
          <RegoinsContainer/>
        </Container>
    </Home>
        <Newsletter/>
        <FooterContainer/>
    </>
  )
}

export default index;