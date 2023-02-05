import styled from "styled-components";

const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 240px;
    padding: 0;
    margin: 0;

    label{
        width: 200px;
       
    }
    #options{
        display: flex;
        flex-direction: row-reverse;
        // gap: 0.5em;
        padding: 0;
        margin: 0;
        width: 60%;

        label{
            width:240px;
        }
    }

    #check{
        width: 70%;
        height: 70%;
        padding: 0;
        margin: 0;
        cursor: pointer;
    }

    #check2{
        width: 80%;
        height: 80%;
        padding: 0;
        margin: 0;
        cursor: pointer;

    }

    #apply{
        width: 229px;
        background: #FFFFFF;
        color: #0D6EFD;
        border: 1px solid #E3E8EE;
        box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
        border-radius: 6px;
    }
`;

export {Aside};