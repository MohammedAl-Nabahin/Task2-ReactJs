import styled from "styled-components";

import {SubmitButton} from "../../Components/FormFields/SubmitButton/style";

import trendingPic from '../../images/backgrounds/trending.png';


const Trending = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: space-evenly; */
    align-items: center;
    width: 73em;
    /* height: 25.000em; */
    gap: 1em;
    padding: 1em 2em;
    /* background-color: gray; */
   
`;


const TrendingList = styled.div`
    display: flex;
    flex-direction: column;

   
`;


const TrendingListItem= styled.div`
    width: 15.625em;
    height: 2.5em;
    padding-left: 0.2em;

    &:hover{
        background-color: #E5F1FF;
        border-radius: 0.5em;
    }

    &:first-child{
        background-color: #E5F1FF;
        border-radius: 0.5em;
    }

    cursor: pointer;
    
`;

const LearnMore = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-image: url(${trendingPic});
    width: 41.563em;
    height: 22.500em;

    .latest{
        position: absolute;
        top: 2em;
        left:2em;

    }

    #learnMoreButton{
        filter: drop-shadow(3px 1px 3px rgba(56, 56, 56, 0.1));
        width: 112px;
        height: 40px;
        background-color: white;
        color: black;
        border-radius: 0.5em;
        border: none;
        margin: 2em 0em;
        font-weight: bold;
        cursor: pointer;
    }
    span{
        margin: 0;
        font-size: 28px;
    }
    h1{
        margin: 0;
    }
`;


const GetStarted = styled.div`
    display: flex;
    flex-direction: column;
    width: 13em;
    height: 22.500em;
    gap:0.5em;    
    /* align-items: center; */
    justify-content: center;

    #orangeBox{
    width: 13em;
    height:5.938em;
    border-radius: 0.4em;
    
    }

    
    #greenBox{
    width: 13em;
    height:5.938em;
    border-radius: 0.4em;

    }

    .controlBtns{
        display: flex;
        flex-direction: column;
        background: #E3F0FF;
        border-radius: 6px;
        /* padding: 1em 0; */
        gap: 0.4em;
        height: 9.375em;
        margin: 0 0em;
        align-items: center;
        justify-content: center;

       .spans{
        display: flex;
        flex-direction: column;
       }
    }

    .avatar{
        display:flex;
        flex-direction: row;
        gap: 1em;
        margin: 0 0.5em;
    }
`;

const NavButton = styled(SubmitButton)`
    width:85%;
    height: 2em;
    border:none;
    ${props => props.join ? "" : "background-color:white; color:blue;"}
`;




export {Trending , TrendingList , TrendingListItem , LearnMore , GetStarted , NavButton};