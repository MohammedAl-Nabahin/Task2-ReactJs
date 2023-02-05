import styled from "styled-components";

const Logo = styled.div`
    display: flex;
    flex-direction: row;
    color:#8CB7F5;
    gap:0.3em;
    /* justify-content: center; */
    align-items: center;
    /* width: 20%; */
    #logoLink{
        display: flex;
        flex-direction: row;
        text-decoration: none;
        color: #8CB7F5;
        gap:0.3em;
    /* justify-content: center; */
    align-items: center;
    }
    #mylogo{
        width:3vw;
    }

    h1{
        margin: 0;
        padding: 0;
    }
`;

export default Logo;