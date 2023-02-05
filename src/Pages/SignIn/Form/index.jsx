import React from 'react';
import { useState } from "react";
import * as yup from 'yup';

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

    const [formData, setFormData] = useState({}); 
  const [errors, setErrors] = useState({}); 
  const [go , setGo] = useState(false);
  


    const validationSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        password: yup
          .string()
          .min(8, 'Password must be at least 8 characters')
          .required('Password is required'),
      });


      const handleSubmit =  (event) => {
        event.preventDefault();
        try {
           validationSchema.validate(formData, { abortEarly: false });
        } catch (err) {
          setErrors(err.inner.reduce((acc, { path, message }) => {
            acc[path] = message;
            return acc;
          }, {}));
        }

        if(errors === 0){
            setGo(true);
        }
      };

      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };

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
    <SignInForm onSubmit={handleSubmit}>
        <div className='FormContainer'>
            <FormTitle formTitle="Sign in"/>
            <LabelAndInput labelText="Username" placeholder="Email or phone" value={formData.name} onChange={handleChange}/>
            {errors.name && <p className='error'>{errors.name}</p>}
            <div className='passwordPlace'>
                <PasswordInput labelText="Password"/>  
                <MyPassword src={eye} type={inputType} onClick={toggleInputType} value={formData.password} onChange={handleChange}/>
                {errors.password && <p className='error'>{errors.password}</p>}
            </div>
            <MyCheckInput type="checkbox" labelText={"Remember me"}  id={"myCheckInput"}/>
            {console.log(go)}
            {errors.length===0 ? 
            <Navigate to="/Home">
                <div className='logBox'>
                   <MySubmitButton buttonText="Log In" type="submit"/>
                </div>
            </Navigate>
            :
            <div className='logBox'>
            <MySubmitButton buttonText="Log In" type="submit"/>
         </div>
}
            <OR/>
            <ContinueWith src={googlePic}  google text={"Continue With Google"} />
            <ContinueWith src={facebook}  text={"Continue With Facebook"}/>          
                <FormLink LinkText={"Don't have an account?"} goTo={"Register now"} to="/Register"/>
        </div>
    </SignInForm>
    </>
  )
}

export default Index;   