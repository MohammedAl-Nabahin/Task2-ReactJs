import React from 'react'

//Style
import {Register , MyFormContainer , Inputs} from './style';



//Components
import LabelAndInput from '../../../Components/FormFields/LabelAndInput'
import Label from '../../../Components/FormFields/Label/StyledLable';
import FormInput from '../../../Components/FormFields/FormInput';
import SubmitButton from '../../../Components/FormFields/SubmitButton';
import MyCheckInput from '../../../Components/FormFields/CheckInput';
import FormLink from '../../../Components/FormFields/FormLink';
import FormTitle from '../../../Components/FormFields/FormTitle/FormTitle';
import { Link, Navigate } from 'react-router-dom';


function Index() {
  return (
    <Register>
       
        <MyFormContainer>
        <FormTitle formTitle={"Register"} />
            <Inputs>    
                <LabelAndInput 
                    id="registerName" labelText={"Name"} for="registerName"
                    placeholder="Type here" value={""} onClick={""} type="text"
                />
                <LabelAndInput 
                    id="registerSurname" labelText={"Surname"} for="registerSurname" 
                    placeholder="Type here" value={""} onClick={""} type="text"
                />
            </Inputs> 

            <LabelAndInput 
                    id="email" labelText={"Your e-mail"} for="email" 
                    placeholder="example@mail.com" value={""} onClick={""} type="email"
            />

            <div className='phoneNum'>   
                <Label for="" labelText={"Phone"}/>
                
                
                    {/* <select> 

                    </select> */}
                    <FormInput placeholder='00-000-00-00'/>
                
            </div>

            <LabelAndInput labelText={"Password"} placeholder="At least 6 characters." type={"password"}/>
            <LabelAndInput labelText={"Repeat password"} placeholder="Type here" type={"password"}/>

            <Link to={"/"}>
                <div className='contain'>
                <SubmitButton buttonText={"Register now"} id="submitBtn"/>
                </div>
            </Link>

            <MyCheckInput  type={"checkbox"} labelText="I agree with "/>
            <FormLink  LinkText={"Already have an accaunt?"} goTo=" Logn in" to={"/Login"}/>


        </MyFormContainer>
    </Register>
  )
}

export default Index;