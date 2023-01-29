import styled from "styled-components";

import LabelAndInput from '../LabelAndInput/style';

const MyCheckInput = styled(LabelAndInput)`
        display: flex; 
        flex-direction: row-reverse;
        align-items: center;
        gap: 2px;
        height: 2.25em;
        width: 8.5em;
        justify-content: flex-end;
        font-weight: 400;
        font-size: 16px;
        line-height: 5px;
        color: #1C1C1C;

        input[type=checkbox]{
            width: 1.35em;
            cursor: pointer;
            transition: all .275s;
            border-radius: 10%;
        }

        input:checked{
            width:1.40em;
        }

        
`;



export default MyCheckInput;