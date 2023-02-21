import styled from "styled-components";

const MyCart = styled.div`
    width: 74%;
    /* width: 880px; */
    height: 552px;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 552px;
    background-color: white;
    border: 1px solid #E4E4E3;
    border-radius: 6px;
`;


const CartFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute; 
    bottom: 21px;
    width: 100%;
    padding: 0 20px;



    a{
        text-decoration: none;
    }

    #backBtn{
        width: 159px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.6em;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
        height: 40px;
    }


    #remove{
        width: 115px;
        color: #0D6EFD;
        background-color: white;
        border: 1px solid #E4E4E3;
        height: 40px;
    }

  
`;


export {MyCart , CartFooter}