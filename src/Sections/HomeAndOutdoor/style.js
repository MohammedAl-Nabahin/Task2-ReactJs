import styled from "styled-components";


const HomeItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid #BBBCBE;
`;

const Items =  styled.div`
    width: calc(1180px - 280px);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export {HomeItemsContainer , Items};
