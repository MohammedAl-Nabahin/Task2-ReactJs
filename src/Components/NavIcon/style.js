import styled from "styled-components";

const NavIcon = styled.li`
    display: flex;
    flex-direction: column;
    width:4.3vw;
    align-items: center;
    justify-content: center;
    /* overflow: hidden; */
    cursor: pointer;
    color:#8B96A5;

    a{
        text-decoration: none;
    }

    #iconTitle{
        display: flex;
        flex-wrap: nowrap;
    }
`;

export default NavIcon;