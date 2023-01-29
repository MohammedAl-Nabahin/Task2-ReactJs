import React from 'react'

import {DealsContainer , DealsTitle , TimerContainer , LeftSide , RightSide} from './style.js';

//Components
import OfferTimer from '../../Components/OfferTimer';
import OfferCard from '../../Components/OfferCard';

//images
import watch from '../../images/tech/appleWatch.png';
import camera from '../../images/tech/camera.png';
import laptop from '../../images/tech/laptop.png';
import headSet from '../../images/tech/headSet.png';
import phone from '../../images/tech/phone.png';
import Container from '../../Components/Container/style.js';



function index() {
  return (
    // <Container>
    <DealsContainer>
        <LeftSide>
                <DealsTitle>
                    <h3>Deals and offers</h3>
                    <span>Hygiene equipments</span>
                </DealsTitle>

                <TimerContainer>
                    <OfferTimer time="04" timeText={"Days"}/>
                    <OfferTimer time="13" timeText={"Hour"}/>
                    <OfferTimer time="34" timeText={"Min"}/>
                    <OfferTimer time="56" timeText={"Sec"}/>
                </TimerContainer>
        </LeftSide>

        <RightSide>
            <OfferCard cardTitle="Smart watches" discount={"-25%"} src={watch} alt="watch" id="watch"/>
            <OfferCard cardTitle="Laptops" discount={"-15%"} src={laptop} alt="laptop" id="laptop"/>
            <OfferCard cardTitle="GoPro cameras" discount={"-40%"} src={camera} alt="camera" id="camera"/>
            <OfferCard cardTitle="GoPro cameras" discount={"-25%"} src={headSet} alt="headSet" id="headSet"/>
            <OfferCard cardTitle="GoPro cameras" discount={"-25%"} src={phone} alt="phone" id="phone"/>
        </RightSide>
    </DealsContainer>
    // </Container>
  )
}

export default index