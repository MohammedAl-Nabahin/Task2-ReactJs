import React from 'react'
import FormInput from '../FormFields/FormInput';
import SubmitButton from '../FormFields/SubmitButton';


import  {SearchBar}  from './style';
import {MyCategorySelect} from './style';

function index() {
  return (
    <SearchBar>
        <FormInput placeholder={"Search"} id="search"/>
        <div id='categorySelect'>
        <MyCategorySelect>
            <option value="All category" className='searchOption'>All category</option>
        </MyCategorySelect>
        </div>
        <div>

        <SubmitButton type={"submit"}  buttonText="Search" id="searchSubmit"/>
        </div>
    </SearchBar>
  )
}

export default index;