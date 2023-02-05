import styled from "styled-components";

const RecommendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 1180px;
    /* height:calc(32px + 640px + 24px); */
`

const RecommendedSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 19.5px;

`;

export {RecommendedContainer , RecommendedSection};