import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 100%; */
    position: static;
    /* padding: 0 2em; */
`;


const HeaderSectionOne = styled.div`
    display: grid;
    grid-template-columns: 0.65fr 0.70fr 0.7fr;
    /* justify-content: space-around; */
    align-items: center;
    border-bottom: 0.1em solid #E3E8EE;
    /* padding: 0 3em; */

    #headerList {
        display: flex;
        gap: 1em;
    }
 
`;


const HeaderSectionTwo = styled.div`
    display: grid;
    grid-template-columns:1fr 0.5fr ;
    width: 100%;
    justify-content: space-between;
    border-bottom: 0.1em solid #E3E8EE;
    align-items: center;
    gap: 7em;
    


    
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}


.navSelect{
    width: 7.5em;
    font-size: 15px;
    border: none;
    outline: none;
    cursor: pointer;
    
}

.help{
    font-size: 15px;
    border: none;
    outline: none;
    cursor: pointer;
}
`;

const SettingsNav = styled.nav`
    display: flex;
    /* display: grid; */
    flex-direction: row;
    /* grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr; */

    gap: 1em;
    width: 100%;
    /* width: 50%; */
    overflow: hidden;
    flex-wrap: nowrap;
   
`;

const NavPages = styled.nav`
    #menuItem{
        display: flex;
        justify-content:center;
        align-items: center;
        gap: 0.5em;
        cursor: pointer;    
        margin-left: 6.5em;
    }




`;

const NavList= styled.ul`
        list-style: none;
        display: flex;
        flex-direction: row;
        gap: 2em;
`;

const NavItem = styled.li`
    cursor: pointer;
`;

const Ship = styled.div`
    display: flex;
    flex-direction: row;
    gap:0.5em;
    cursor: pointer;
    /* width: 20em; */
    padding : 0 2em;
`;

export {HeaderContainer , HeaderSectionOne , HeaderSectionTwo , SettingsNav , NavPages , NavList , NavItem , Ship};