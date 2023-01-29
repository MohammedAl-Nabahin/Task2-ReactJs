import styled from "styled-components";

const ContinueButton = styled.button`

    font-weight: 300px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap:3em;
    width: 98%;
    height: 2.5em;
    /* background: #FFFFFF; */
    border: 1px solid #E0E0E0;
    box-shadow: 0px 1px 3px rgba(56, 56, 56, 0.1);
    border-radius: 6px;
    text-align: center;
    cursor: pointer;

    ${props => props.google ? "background-color:#FFFFFF": "background-color:#4267B2; color:white;"};
  

`;

export default ContinueButton;