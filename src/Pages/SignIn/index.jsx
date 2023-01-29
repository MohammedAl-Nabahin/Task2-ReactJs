import React from 'react';
import Form from '../SignIn/Form';
import FormFooter from '../../Components/FormFooter';

import styled from 'styled-components';

const LogIn = styled.div`
margin: 0;
padding:0;
    /* width: 100%; */
    height: 100vh;
    /* height: 100%; */
    background-color: #EEEEEE;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* padding-top: 1em; */
    align-items: center;
    /* margin-bottom: 4em; */

    
`
function index() {
  return (
    <>
    <LogIn>
        <Form/>
    <FormFooter/>
    </LogIn>
    </>

  )
}

export default index