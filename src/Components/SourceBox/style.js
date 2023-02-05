import styled from "styled-components";

import home from '../../images/backgrounds/outdoor.png';
import tech from '../../images/backgrounds/tech.png'

const SourceBox = styled.div`
display: flex;
flex-direction: column;
padding-left: 20px;
padding-top: 20px;
width: 280px;
height: 257px;
background-repeat: no-repeat;
background-size: cover;
${(props) => props.home ? `background-image:url(${home});gap: 1em` : `background-image:url(${tech});gap: 3em`};


.sourceTitle{
    width:170px;
    color: black;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.2px;
    height: 52px;
}

.sourceButton{
    width: 119px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
    border-radius: 6px;
    cursor: pointer;
}


`;

export {SourceBox};