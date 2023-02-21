import React from 'react';

import styled from 'styled-components';

import Icon from '../../Components/Icon';

import grid from '../../images/icons/grid_view.png';
import flex from '../../images/icons/flex.png';


const NumOfItems = styled.div`
    width: 920px;
    height: 62px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 0 1em;
    border-radius: 6px;
    border: 2px solid #E4E4E3;

    #verified{
        width: 20px;
        height: 20px;
    }

    .myVInput{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
    }
`;


const Left = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #1C1C1C;
    display: flex;
    align-items: center;
`;

const Right = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;    
    justify-content: center;
    /* justify-content: center; */

    #select{
        height: 40px;
        width: 172px;
        border-color: #E4E4E4;
        border-radius: 6px;
    }
`;

const Views = styled.div`
    width: 76px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #E4E4E4; 
    border-radius: 6px;
    justify-content: center;
    gap: 0em;

    div{
        width: 37px;
        height: 37px;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-color: ${(props) => props.grid ? "transparent" : "#8B96A5"}; */
        img{
            width: 60%;
            height: 70%;
        }
    }

    #flexView{
     width: 70%;
     height: 70%;
    }

    #gridView{
     width: 70%;
     height: 60%;
    }

`;

function index({numberOfItems , onClickGrid , onClickFlex , styleGrid , styleFlex}) {
  return (
    <NumOfItems>
        <Left>
            {/* {numberOfItems} */}
            12,911 items in <strong> &nbsp; Mobile accessory</strong>
        </Left>

        <Right>
            <div className='myVInput'>
                <input type={"checkbox"} id="verified"/> <label htmlFor='verified'>Verified only</label>
            </div>
            <select id='select'>
                <option>Featured</option>
            </select>
            <Views>

                <div onClick={onClickGrid} style={styleGrid} grid><Icon  id='gridView' src={grid}/></div>
                <div  onClick={onClickFlex} style={styleFlex}><Icon id='flexView' src={flex}/></div>
            </Views>
        </Right>
    </NumOfItems>
  )
}

export default index;