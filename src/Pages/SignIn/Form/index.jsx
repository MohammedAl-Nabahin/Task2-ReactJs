import React from 'react';
import { useState } from "react";

//Style
import SignInForm from './style';


//Components
import FormTitle from '../../../Components/FormFields/FormTitle/FormTitle'
import MySubmitButton from '../../../Components/FormFields/SubmitButton/index'
import LabelAndInput from '../../../Components/FormFields/LabelAndInput'
import MyCheckInput from '../../../Components/FormFields/CheckInput/index'
import OR from '../../../Components/OR'
import PasswordInput from '../../../Components/FormFields/PasswordInput/Label/index';
import MyPassword from '../../../Components/FormFields/PasswordInput/index';
import ContinueWith from '../../../Components/FormFields/ContinueWith'
import FormLink from '../../../Components/FormFields/FormLink'

//Images
import eye from '../../../images/icons/eye.svg';
import googlePic from '../../../images/icons/google.png';
import facebook from '../../../images/icons/facebook.png';
import { Link, Navigate } from 'react-router-dom';




function Index() {

   

    const [inputType, setInputType] = useState("password");

    const toggleInputType = () => {
        if (inputType === "password") {
            setInputType("text");
        } else {
            setInputType("password");
        }
    };


  return (
    <>
    <SignInForm>
        <div className='FormContainer'>
            <FormTitle formTitle="Sign in"/>
            <LabelAndInput labelText="Username" placeholder="Email or phone"/>
            <div className='passwordPlace'>
                <PasswordInput labelText="Password"/>  
                <MyPassword src={eye} type={inputType} onClick={toggleInputType}/>
            </div>
            <MyCheckInput type="checkbox" labelText={"Remember me"}  id={"myCheckInput"}/>
            <Link to="/Home">
                <div className='logBox'>
                   <MySubmitButton buttonText="Log In" type="submit"/>
                </div>
            </Link>
            <OR/>
            <ContinueWith src={googlePic}  google text={"Continue With Google"} />
            <ContinueWith src={facebook}  text={"Continue With Facebook"}/>          
                <FormLink LinkText={"Don't have an account?"} goTo={"Register now"} to="/"/>
        </div>
    </SignInForm>
    </>
  )
}

export default Index;   