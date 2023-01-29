import styled from "styled-components";

const OR = styled.div`

    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.2px;
    color: #A9ACB0;
    display: flex;
    align-items: center;


    &::before{
        content: "";
        border: 1px solid #E0E0E0;
        background-color: #E0E0E0;
        width:7.8rem;               //make it dynamic
        margin-right:0.5em;
    }

    &::after{
        content: "";
        border: 1px solid #E0E0E0;
        background-color: #E0E0E0;
        width: 7.8rem;               //make it dynamic
        /* max-width: max-content; */
        margin-left:0.5em;

    }

`;

export default OR;