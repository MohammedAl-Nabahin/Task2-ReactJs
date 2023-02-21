import React, { useState } from 'react';

import arrow from '../../../../images/icons/arrowUp.png';

import Icon from '../../../../Components/Icon';

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const ListContainer = styled.div`
  display :flex ;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: 5px;
  margin: 0em 0;
  padding: 0;


  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    list-style: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #505050;
    gap: 9px;
    padding: 0;
    margin: 0;
 

    #navSee{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #0D6EFD;
        text-decoration: none;
    }
  }

  li{
    display: flex;
    align-self: flex-start;
    margin: 0.2em 0;
    padding: 0;
    cursor: pointer;
  }

  #arrow{
    cursor: pointer;
  }
`;

const ListTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid #E3E8EE; 
  padding: 0.5em 0;


`;

function Index({title , option1 , option2 , option3 , option4 , to , onClick1 , onClick2 , onClick3 , onClick4 , onClickSee}) {

    const [showList, setShowList] = useState(true);
    const hide = () => {showList===true ? setShowList(false) : setShowList(true)};

  return (
    <ListContainer>
        <ListTitle>
            {title}
            <Icon src={arrow} id="arrow" onClick={hide}/>
        </ListTitle>

        {showList ? 
        <ul>
            <li onClick={onClick1}>{option1}</li>
            <li onClick={onClick2}>{option2}</li>
            <li onClick={onClick3}>{option3}</li>
            <li onClick={onClick4}>{option4}</li>
            <li onClick={onClickSee} id="see"><NavLink to={to} id="navSee">See all</NavLink></li>
        </ul>
            : null
        }
    </ListContainer>
  )
}

export default Index;