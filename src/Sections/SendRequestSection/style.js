import styled from "styled-components";

import supply from '../../images/backgrounds/linearBackground.png';

const Supplies = styled.div`
    width:100%;
    height: 420px;
    padding:0  1em;
    background-image: url(${supply});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding:3em 3em;
`;

const Left = styled.div`
    width:440px;
    height: 139px;
    display: flex;
    flex-direction: column;
    color: white;
    h1{
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
        letter-spacing: -0.2px;
        color: #FFFFFF;
    }

    span{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.2px;
        color: #FFFFFF;
        width: 370px;
    }
`;

const Right = styled.form`
    width: 491px;
    height: 346px;
    background-color: white;
    color:black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding:2em 1.5em;
    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.25);
    border-radius: 6px;
    gap: 1em;

    h3{
        margin: 0;
        padding: 0;
    }

    #requestInput{
        width: 440px;
        height: 40px;
        border: 1px solid #E4E4E4;

    }

    .supplyFormFields{
        width: 440px;
        border-color: #E4E4E4;
    }

    #sendTextArea{
        height: 73px;
        border-color: #E4E4E4;
        border-radius: 6px;
        &::placeholder{
            color:#A9ACB0;
            padding: 1em 0.3em;
        }
        resize: none;
    }

    #inquiryButton{
        width: 129px;
        height: 40px;
    }
`;


const SupplyTypes = styled.div`
    display: flex;
    flex-direction:row;
    width: 325px;
    justify-content: flex-start;
    gap: 8px;

    #typesInput{
        width: 206px;
        height: 40px;
        border: 1px solid #E4E4E4;
        border-radius: 6px;
        &::placeholder{
            padding-left: 0.5em;
        }
    }
    select{
        border-color:#E4E4E4;
        border-radius:6px;
        width: 111px;
    
    }

    input{
        width: 206px;
        border: 1px solid #E4E4E4;
    }

    
`;
export {Supplies , Left , Right , SupplyTypes};