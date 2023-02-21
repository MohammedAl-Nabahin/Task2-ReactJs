import styled from "styled-components";

const ItemDetailsBox = styled.div`
    /* width: 880px; */
    width: 80%;
    height: 618px;
    display: flex;
    flex-direction: column;
    border: 1px solid #E4E4E3;
    border-radius: 6px;
    background-color: white;
    

    .firstCol{
        background-color: #EFF2F4;
    }

    li{
        color: black;
    }
`;

const DescriptionHeader = styled.nav`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #E4E4E3;
    width: 100%;
    position: static;
    height: 48px;
    align-items: center;
    gap: 1em;
 
`;

const HeaderItem = styled.div`
    width: 103px;
    height: 100%;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8B96A5;
    white-space: nowrap;
    text-overflow: clip;
    width: 6em;

    &:first-child{
        color:#0D6EFD;
        border-bottom: 2px solid #0D6EFD;
        width: 8em;
        margin-left: 0.4em;
    }


    &:nth-child(4){
        margin:0 2em;
    }
`; 

const DescriptionText = styled.p`
    width: 91%;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #505050;
    margin-left: 20px;
`


const Table = styled.table`
    border:1px solid #E4E4E3;
    border-radius: 6px;
    width: 65%;
    margin-left: 19px;
    border-collapse: collapse;
    margin-bottom: 1.5em;
`;


const Td = styled.td`
    border: 1px solid #E4E4E3;
    padding-left:10px;
`;

const Tr = styled.tr`
    height: 36px;
    align-items: center;
    justify-content: center;
`;

const Check = styled.div`
    margin-left: 19px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    div{
        display: flex;
        flex-direction: row;
        gap: 0.5em;
    }
`;

export {ItemDetailsBox , DescriptionHeader , HeaderItem , DescriptionText , Table , Td , Tr , Check};