import styled from "styled-components";

const TechItem = styled.div`
    width: 100%;
    height: 230px;
    display: flex;
    flex-direction: row;
    gap: 12px;
    background-color: white;
    border-radius: 6px;
    border: 1px solid #E4E4E3;
    position: relative;
    a{
        text-decoration: none;
        }

    #like{
        top: 20px;
        right: 20px;
    }


    #viewAndAdd{
        display: flex;
        flex-direction:row;
        gap: 5px;
        align-items: center;
        width: fit-content;
    }
    
`;

const ItemData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;

    h3{
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: #1C1C1C;
        padding: 0;
        margin: 0;
    }

    p{
        margin: 0;
        padding: 0;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.2px;
        color: #505050;
        width: 80%;
    }

    .view{
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #0D6EFD;
       
    }
`;


const Price = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;

    h2{
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: -0.2px;
        color: #1C1C1C;
        padding: 0;
            margin: 0;
    }

    span{
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        text-decoration-line: line-through;
        color: #8B96A5;
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
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #00B517;
        }

        .orders{
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #8B96A5;
        }
`;



export {TechItem , ItemData , Price , Rating};