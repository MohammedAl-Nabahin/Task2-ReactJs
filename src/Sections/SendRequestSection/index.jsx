import React from 'react'
import  FormInput  from '../../Components/FormFields/FormInput';
import  SubmitButton  from '../../Components/FormFields/SubmitButton';

import {Supplies , Left , Right , SupplyTypes} from './style';

function index() {
  return (
    <Supplies>
         
        <Left>  
        <h1>An easy way to send requests to all suppliers</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</span>
        </Left>
        <Right onSubmit={(e)=>{e.preventDefault()}}>
            <h3>Send quote to suppliers</h3>
            <FormInput  id={"requestInput"} placeholder="what item you need?"  className={"supplyFormFields"}/>
            <textarea className={"supplyFormFields"} id="sendTextArea" placeholder='Type more details'/>
            <SupplyTypes className={"supplyFormFields"}>
                <input placeholder="Quantity"  id={"typesInput"}/>
                <select value={""}>
                    <option>Pcs</option>
                </select>
            </SupplyTypes>

            <SubmitButton className={"supplyFormFields"} buttonText="Send incuiry" type={"submit"} id="inquiryButton"/>
        </Right>
    </Supplies>
  )
}

export default index