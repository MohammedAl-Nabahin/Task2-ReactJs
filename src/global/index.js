import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        font-style: normal;
    }
    body{
        background-color:#EEEEEE;
        height: 100%;
    }
    `;

    export default GlobalStyle;
