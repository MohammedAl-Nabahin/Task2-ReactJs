import styled from "styled-components";

const PasswordInput = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* gap: 50px; */
    width:100% ;


    span{
        font-weight: 400;
        font-size: 13px;
        line-height: 18px;
        letter-spacing: -0.2px;
        color: #0D6EFD;
        text-decoration: none;
        background-color: transparent;
        cursor: pointer;
    }
`;

// const Anchor = styled.a`
//     font-weight: 400;
//     font-size: 13px;
//     line-height: 18px;
//     letter-spacing: -0.2px;
//     color: #0D6EFD;
// `;

export default PasswordInput;