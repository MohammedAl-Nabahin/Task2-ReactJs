import styled from "styled-components";

const Checkout = styled.div`
    width: 280px;
    height: 302px;
    border: 1px solid #E4E4E3;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 1em;
    /* padding:10px 20px; */
    background-color: white;
    justify-content: center;
    align-items: center;

    button{
        background-color: #00B517;
        color: white;
        width: 247px;
        border: none;
        height: 54px;
    }
`;


const PricesBox = styled.div`
    width: 87%;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    border-bottom: 1px solid #E4E4E3;
    padding-bottom: 1em;
`;


const Prices = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .Pname{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.2px;
        color: #505050;
    }

    .total{
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #1C1C1C;
    }

    .totalNum{
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        text-align: right;
        letter-spacing: -0.2px;
        color: #1C1C1C;
    }

    .discount{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: right;
        letter-spacing: -0.2px;
        color: #FA3434;
    }

    .tax{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: right;
        letter-spacing: -0.2px;
        color: #00B517;
    }

    .sTotal{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: right;
        letter-spacing: -0.2px;
        color: #505050;
    }
`;

const Total = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 87%;
`;

const Pay = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-top: 0.5em;
    width: 87%;

    img{
        width: 20%;
        height: 75%;
    }
`;


export {Checkout , Prices , PricesBox , Total , Pay};