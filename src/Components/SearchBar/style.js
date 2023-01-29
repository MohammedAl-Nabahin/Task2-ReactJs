import styled from "styled-components";

const SearchBar = styled.div`
    display: flex;
    flex-direction: row;
    width: 42vw;
    border: 2px solid #0D6EFD;
    border-radius: 0.5em;
    justify-content: center;
    align-items: center;


    #searchSubmit{
        width: 6vw;
        border: none;
        border-left: 1px solid;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    #search{
        width: 27vw;
        border: none;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 1px solid #0D6EFD ;

    }

    #categorySelect{
        width: 9vw;
        display: flex;
        align-items: center;
    }


    

  
`;


const MyCategorySelect = styled.select`
    width:8vw;
    font-size:17px ;
    margin-left: 0.2em;
     height: 4vh; 
     border: none;
     outline: none;
     cursor: pointer;
`;


export {SearchBar , MyCategorySelect};