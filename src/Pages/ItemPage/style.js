import styled from "styled-components";


const IContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 77vw;

    #shop{
        width: 100%;
        height: 100%;
        /* background-repeat: no-repeat;
        background-size: cover; */
    }

    .side{
        display: flex;
        flex-direction:row;
        gap: 20px;
    }
`

const ItemPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;
    margin-bottom: 55px;

    .shop{
        width: 100%;
        height: 120px;
   
        border-radius: 6px;
    }
`;

const RContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 350px;
    gap: 1em;
    padding: 1em;
    border: 1px solid #E4E4E3;
    border-radius: 6px;
    background-color: white;

`;

const AllItems = styled.div`
    display: flex;
    flex-direction: row;
    gap:1.5em;
    background-color: white;
    width: 100%;
`;

const RItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    width: 172px;


    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #505050;
        margin: 0;
        padding: 0;
    }

    span{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #8B96A5;

    }
`;



export {ItemPage , RContainer , RItem , AllItems , IContainer};