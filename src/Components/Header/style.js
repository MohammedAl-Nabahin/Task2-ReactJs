import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* padding: 0 2em; */
    background-color: white;
    margin-bottom: 1em;
    z-index: 10;
    /* position: static; */
    /* margin: auto; */

`;


const HeaderSectionOne = styled.div`
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    align-items: center;
    border-bottom: 0.1em solid #E3E8EE;
    max-width: 100%;
    /* padding: 0 3em; */
    /* position: relative; */

    #headerList {
        display: flex;
        gap: 1em;
        width: 100%;
    }
 
`;


const HeaderSectionTwo = styled.div`
    display: flex;
    /* grid-template-columns:0.5fr 0.2fr ; */
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    border-bottom: 0.1em solid #E3E8EE;
    align-items: center;
    gap: 10em;
    a{
        text-decoration: none;
        color: black;
    }


    
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
    width: 15em;
    padding : 0 2em;
`;

const InnerContainer = styled.div`
    width: 1190px;
    display: flex;
    flex: row;
    justify-content: center;
    align-items: center;
    gap:40px;
`;


const InnerContainer2 = styled.div`
    width: 100%;
    display: flex;
    flex: row;
    /* justify-content: space-between; */
    /* align-items: center; */
    gap:247px;
    padding-left: 23px;
`;


export {HeaderContainer , HeaderSectionOne , HeaderSectionTwo , SettingsNav , NavPages , NavList , NavItem , Ship , InnerContainer , InnerContainer2};