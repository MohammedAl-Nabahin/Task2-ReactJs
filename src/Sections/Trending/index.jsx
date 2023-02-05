import React from 'react'

import OfferBox from '../../Components/OfferBox';
// import Container from '../../Components/Container';

import avatar from '../../images/icons/Avatar.svg';

import { Trending , TrendingList , TrendingListItem , LearnMore , GetStarted , NavButton} from './style';
import { Link } from 'react-router-dom';

function index({join}) {
  return (
    // <Container>
    <Trending>

        <TrendingList>
            <TrendingListItem>Automobiles</TrendingListItem>
            <TrendingListItem>Clothes and wear</TrendingListItem>
            <TrendingListItem>Home interiors</TrendingListItem>
            <TrendingListItem>Computer and tech</TrendingListItem>
            <TrendingListItem>Tools, equipments</TrendingListItem>
            <TrendingListItem>Sports and outdoor</TrendingListItem>
            <TrendingListItem>Animal and pets</TrendingListItem>
            <TrendingListItem>Machinery tools</TrendingListItem>
            <TrendingListItem>More category</TrendingListItem>
        </TrendingList>

        <LearnMore>
            <div className='latest'>
                <div> 
                    <span>Latest trending</span>
                    <h1>Electronic items</h1>
                </div>
                <div>
                    <button id='learnMoreButton'>Learn More</button>
                </div>
            </div>
        </LearnMore>

        <GetStarted>
            <div className='controlBtns'>
                <div className='avatar'>
                    <div>
                        <img src={avatar} alt="person" id='person'/>
                    </div>
                    <div className='spans'>
                        <span>Hi, user</span>
                        <span>let's get started</span>
                    </div>
                </div>
                <div className='joinLink'>
                    <Link to="/Register">
                        <NavButton join>Join now</NavButton>
                    </Link>
                </div>

                <div className='joinLink'>
                    <Link to="/Login">
                        <NavButton>Log in</NavButton> 
                    </Link>   
                </div>
            </div>

            

            <OfferBox orange offerText="Get US $10 off with a new supplier" id="orangeBox"/>
            <OfferBox offerText="Send quotes with supplier preferences" id="greenBox"/>

        </GetStarted>


    </Trending>
    // </Container>
  )
}

export default index;