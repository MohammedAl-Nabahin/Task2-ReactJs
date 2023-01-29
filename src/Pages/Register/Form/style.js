import styled from "styled-components";

const Register = styled.div`
    width: 25.188em;
    height: 37.063em;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 3px 5px 3px rgba(56, 56, 56, 0.1);
    border-radius: 6px;
    /* position: relative; */
    /* margin-top: auto; */
    /* margin-bottom: 5em; */

    .phoneNum{
        width:97%;
    }

    #submitBtn{
        width:100%;
    }

    .contain{
        width: 20em;
    }

`;


const MyFormContainer = styled.form`
        /* position: absolute; */
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 80%;
        /* height:100%; */
        gap:0.8em;
        margin: 0;
        padding: 0;

        #registerName{
            width:91%;
        }

        #registerSurname{
            width: 91%;
        }
`;



 const Inputs = styled.div`
    display: flex;
    /* width: 100%; */
    flex-direction: row;
    /* gap:0.2em; */
`;

export   {Register , Inputs , MyFormContainer};
