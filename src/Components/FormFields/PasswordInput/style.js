import styled from "styled-components";

const MyPassword = styled.div`

    background: #FFFFFF;
        border: 0.1em solid #E0E0E0;
        border-radius: 6px;
        width: 100%;
        height: 2.3em;
        cursor: text;
        transition: 1 ease-in-out;
        justify-content: center;
        align-items: center;
    
        &::placeholder{
            opacity: 0.8;
            text-align: justify;
            padding-left:0.5em;
            font-size: 14px;
            line-height:2px;
            color: #A9ACB0;
        }

        #passwordIn{
            width:19.1em;
            height: 2.4em;
            border: none;
        }


        input:focus{
            outline: none;
        }

        img{
            position:absolute;
            cursor: pointer;
            width: 1.5em;
            height: 1.5em;
            margin-top: 0.4em;

            
        }


        /* input[type='password'] {
         
        }
        input[type='text'] {
                
        } */
        
`;


export default MyPassword;