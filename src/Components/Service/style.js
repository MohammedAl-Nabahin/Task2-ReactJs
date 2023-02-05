import styled from "styled-components";


const Service = styled.div`
    /* background-image: url(${(props=>props.img)}); */
    background-color: black;
    width:280px;
    height:200px;
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 6px;
`;


const ServiceIcon = styled.div`
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background-color: #D1E7FF;
        position: absolute;
        top: 92px;
        right: 21px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid white;
        img{
            width: 40%;
            height: 40%;
        }
`;

const Title = styled.div`
    height: 80px;
    width: 100%;
    color: black;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 0 1em;

    span{
        width: 65%;
    }
`;
export {Service , ServiceIcon , Title};