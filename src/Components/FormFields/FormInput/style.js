import styled from "styled-components";


const FormInput = styled.input`
    background: #FFFFFF;
    border: 0.15em solid #E0E0E0;
    border-radius: 6px;
    width: 100%;
    
    /* width: 100%; */
    height: 2.5em;
    cursor: text;
    transition: 1 ease-in-out;
  
    &::placeholder{
        opacity: 0.8;
        text-align: justify;
        padding-left:0.5em;
        font-size: 14px;
        line-height: 5px;
        color: #A9ACB0;
    }

    &:focus{
        outline: none;
    }
`;

const Father = styled.div`
      width: 100%;
`
export {FormInput , Father};