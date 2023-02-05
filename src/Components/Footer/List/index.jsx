import React from 'react';

import styled from 'styled-components';

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    ul ,li{
        display: flex;
        flex-direction: column;
        list-style: none;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.2px;
        color: #8B96A5;
        gap: 3px;
        margin: 0;
        padding:0;
        cursor: pointer;

        }

        h3{
          cursor: pointer;
            font-weight: 500;
            font-size: 16px;
            line-height: 22px;
            color: #1C1C1C;
            margin: 0;
            padding: 0;
        }
`;

function index({listTitle , listItem1 , listItem2 , listItem3 , listItem4}) {
  return (
    <List>
        <h3>{listTitle}</h3>
        <ul>
            <li>{listItem1}</li>
            <li>{listItem2}</li>
            <li>{listItem3}</li>
            <li>{listItem4}</li>
        </ul>
    </List>
  )
}

export default index