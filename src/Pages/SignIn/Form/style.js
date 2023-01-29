import styled from "styled-components";


const SignInForm = styled.form`
    width: 23.188em;
    height: 33.063em;
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 5px 7px rgba(56, 56, 56, 0.1);
    border-radius: 6px;
    align-self: center;
    margin-top: 5.1em;


    .FormContainer{
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 78%;
        gap:0.8em;

    }

    .passwordPlace{
        width: 98%;
    }
    
    .logBox{
        width: 18em;
    }
`;


export default SignInForm;