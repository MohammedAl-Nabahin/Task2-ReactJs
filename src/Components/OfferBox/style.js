import styled from "styled-components";

const OfferBox = styled.div`
    display: flex;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    padding-left:0.2em;
    padding-top: 0.2em;
    background-color: ${props => props.orange ? '#F38332' :' #55BDC3'};

    span{
        margin: 0.5em;
        max-width: 7em;
    }
`;

export default OfferBox;