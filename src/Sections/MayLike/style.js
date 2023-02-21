import styled from "styled-components";

const MayLike = styled.div`
    /* width: 280px; */
    width: 25%;
    height: 553px;
    display: flex;
    padding: 22px 16px;
    border: 1px solid #E4E4E3;
    border-radius: 6px;
    flex-direction: column;
    background-color: white;
    gap: 1em;


    .title{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.2px;
        color: #1C1C1C;
    }

    .price{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.2px;
        color: #8B96A5;
    }

    h3{
        margin: 0;
        padding:0;
    }

`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    img{
        width:80px;
        height:80px;
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction:column;
`;
const SigleItem = styled.div`
    display: flex;
    flex-direction:row;
    gap: 0.5em;
`;
export {MayLike , Item , Info , SigleItem};