import styled from "styled-components";

const DealsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 1180px;
    height: 240px;
    border: 1px solid #BBBCBE;
    border-right: none;
`;

const DealsTitle = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    h3{
        font-weight: 600;
         font-size: 20px;
         line-height: 28px;
        letter-spacing: -0.2px;
        color: #1C1C1C;
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


const TimerContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 6px;
`;

const LeftSide = styled.div`
    width: 281px;
    /* height: 240px; */
    display: flex;
    flex-direction:column;
    padding-left: 20px;
    padding-top: 20px;
    gap: 18px;
    border-right: 1px solid #BBBCBE;

`;

const RightSide = styled.div`
     /* height: 240px; */
    display: flex;
    flex-direction:row;
`;

export {DealsContainer , DealsTitle , TimerContainer , LeftSide , RightSide};


