import styled from "styled-components";

import shop from '../../images/backgrounds/shopNow.png';

const IContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 80vw;
`

const ItemPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;
    margin-bottom: 55px;

    .shop{
        width: 100%;
        height: 120px;
        background-image: url(${shop});
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 6px;
    }
`;

const RContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 350px;
    gap: 1em;
    padding: 1em;
    border: 1px solid #E4E4E3;
    border-radius: 6px;
    background-color: white;
    justify-content: flex-start;
    /* align-items: center; */
`;

const AllItems = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2em;
    background-color: white;
    align-self: center;

`;

const RItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    width: 172px;
    /* height: 254px; */


    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #505050;
        margin: 0;
        padding: 0;
    }

    span{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #8B96A5;

    }
`;



export {ItemPage , RContainer , RItem , AllItems , IContainer};