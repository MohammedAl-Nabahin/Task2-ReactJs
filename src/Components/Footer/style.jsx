import styled from "styled-components";

const FooterContainer = styled.div`
    width: 100%;
    height: 324px;
    display: flex;
    flex-direction: column;
    
`;


const UpperFooter = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    height: calc(324px - 68px);
    justify-content: center;
    align-items: center;
    gap:88px;
    


    .getApp{
        display: flex;
        flex-direction: column;
        gap: 8px;
        
        h3{
            cursor: pointer;
            padding-bottom:8px;
            font-weight: 500;
            font-size: 16px;
            line-height: 22px;
            color: #1C1C1C;
            margin: 0;
            
        }
    }

    .brand{
        display: flex;
        flex-direction: column;
        gap: 15px;
        justify-content: flex-start;
        /* align-items: center; */

        img{
            padding: 0;
            margin: 0;
        }

        p{
            width: 276px;
            padding: 0;
            margin: 0;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.2px;
            color: #505050;
        }

        ul, li{
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: row;
            list-style: none;
            gap: 11px;
            cursor: pointer;
        }
    }



`;


const LowerFooter = styled.div`
        width: 100%;
        height: 68px;
        background-color: transparent;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 56em;
        justify-content: center;

        div{
            display: flex;
            flex-direction: row;
            gap:0.5em;
            cursor: pointer;
        }
        
        span{
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.2px;
            color: #606060;
        }


`;

export {FooterContainer , UpperFooter , LowerFooter};