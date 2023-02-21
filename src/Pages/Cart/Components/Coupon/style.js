import styled from "styled-components";

const Coupon = styled.div`
    width: 280px;
    height: 110px;
    display: flex;
    flex-direction: column;
    border: 1px solid #E4E4E3;
    border-radius: 6px;
    gap: 6px;
    align-items: center;
    justify-content: center;
    /* justify-content: flex-start; */
    background-color: white;


    span{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #505050;
        align-self: flex-start;
        margin-left:1em;
    }
`;

const ApplyCoupon = styled.div`
    width: 90%;
    height: 40px;
    border: 1px solid #E4E4E3;
    border-radius: 6px;
    display: flex;
    flex-direction: row;

    input{
        border: none;
                border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        height: 100%;

        &::placeholder{
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #8B96A5;
        }
    }

    button{
            border-bottom-left-radius: 0px;
            border-top-left-radius: 0px;
            height: 100%;
            background-color: white;
            color:#0D6EFD;
            width: 85px;
            border: none;
            border-left: 1px solid #E4E4E3;
            
        }
`;


export {Coupon , ApplyCoupon};