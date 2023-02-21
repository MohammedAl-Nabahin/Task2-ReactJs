import styled from "styled-components";

const ShowItemContainer = styled.div`
    width: 100%;
    height: 580px;
    background-color: white;
    display: flex;
    flex-direction: row;
    gap: 30px;
    padding: 10px;
    border: 1px solid #E4E4E3;
    border-radius: 6px;
`;


const PicViewer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Pics = styled.div`
    display: flex;
    flex-direction: row;
    height: 56px;
    gap: 9.15px;


    
        #view{
            width: 345px;
            height: 345px;
        }
    

`;

const Pic = styled.div`
    border: 2px solid #E4E4E3;
    border-radius: 6px;
        
    &:first-child{
        border-color: black;
        border-radius: 0px;
    }

`;

const View = styled.div`
    border: 2px solid #E4E4E3;
    border-radius:6px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    p{
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: -0.2px;
        color: #1C1C1C;
    }

    .stock{
        display: flex;
        flex-direction: row;
        color:green;
    }
`;  


const Rating = styled.div`
        display: flex;
        flex-direction:row;
        align-items: center;
        gap: 5px;

        .myStars{
            display: flex;
            padding: 0;
            margin: 0;
        }

        .gold{
            color:gold;
            padding: 0 4px;
        }

        .divider{
            width:6px;
            height:6px;
            background: #E3E8EE;
            border-radius: 50%;
        }

        .green{
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #8B96A5;
        }

        .orders{
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #8B96A5;
        }
`;

const Prices = styled.div`
    display: flex;
    flex-direction: row;
    width: 430px;
    height: 72px;
    background-color: #FFF0DF;
    justify-content: flex-start;
    align-items: center;
    gap: 49px;
`;

const Pr = styled.div`
    display: flex;
    flex-direction: column;
    width: 78px;
    height: 42px;
    /* padding-left: 7px; */
    align-items: center;

    #red{
        color: red;
    }

    h3{
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #1C1C1C;
        margin: 0;
        padding: 0;
    }

    span{
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: #606060;
        margin: 0;
        padding: 0;
    }

    &::after{
        content: "";
        border: 1px solid #BDC1C8;
        width: 44px;
        transform: rotate(90deg);
        margin-left: 140px;
        margin-top: -22px;

        &:nth-child(2){
            &::after{
                border: none;
            }
        }
    }
`;


const ItemData = styled.div`
    display: flex;
    flex-direction: column;
    width: 430px;
    justify-content: flex-start;
    gap: 16px;
`;

const Data = styled.div`
    width: 255px;
    height: 19px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;

    span{
        width: 700px;
    }

`;

const Line  = styled.div`
    border: 1px solid #E0E0E0;  
    width: 100%;
`;

const SendBox = styled.div`
    width: 280px;
    height: 325px;
    display: flex;
    flex-direction: column;
    gap: 28px;
    border: 1px solid #E4E4E3;
    border-radius: 6px;
    padding: 3px 5px;

    #supp{
        width: 90%;
        height: 15%;
    }
`;

const SendInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;
    padding: 0 1px;
`;

const Info= styled.div`
    display: flex;
    flex-direction: row;
    gap: 18px;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4px;
    button{
        border: 1px solid #E4E4E3;
        border-radius:6px ;
        width: 100%;
        height: 40px;
     ${(props) => props.send ? "background-color:blue;color:white;" : "background-color:white;color:blue;"};

    }
    #send{
        background-color:blue;color:white;
    }
`;

export {ShowItemContainer , PicViewer , Pics , Pic , View,  ItemInfo , Rating , Prices , Pr ,
     ItemData , Data , Line , SendBox , SendInfo , Info, Buttons};
