import styled from "styled-components";

const TechStore = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Items = styled.div`
    display: flex;
    flex-direction: column;
  
`;

const PageLinks = styled.div`
    width: 100%;
    display: flex;
    background-color: transparent;
    height: 30px;
    align-items: center;
    cursor: pointer;

    div{
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
`;

const TechPage = styled.div`
    display: flex;
    flex-direction: row;
    gap: 18px;

    #imgs{
        align-self: center;
        width: 199px;
        height: 199px;
    
    }
`;

const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -0.1em;
    
    gap: 10px;
    width: 920px;

    a{
        text-decoration: none;
    }   

`; 

const Pagenation= styled.div`

`;

const GridTech = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap:15px;
`;



export {TechStore , Items , PageLinks , TechPage , RightSide , Pagenation , GridTech};