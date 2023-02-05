import styled from "styled-components";



const ItemCard = styled.div`
        display: flex;
        flex-direction: row;
         width: 225px;
         height: 127px;
         background-color: white;
        justify-content: space-between;
        border-left: 2px solid #EEEEEE;

         img{
            width:82.37px;
            height: 82px;
            align-self: center;
            cursor: pointer;
         }
`;





const CardTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1em;

    h3{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #1C1C1C;
        cursor: pointer;
    }

    span{
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: #8B96A5;
        width: 55px;
        cursor: pointer;
    }

`;



export {ItemCard , CardTitle};