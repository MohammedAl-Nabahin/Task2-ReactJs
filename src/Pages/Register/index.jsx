import React from 'react';
import Form from '../Register/Form/Index';
import FormFooter from '../../Components/FormFooter';

import styled from 'styled-components';

const Register = styled.div`
margin: 0;
padding:0;
    /* width: 100%; */
    height: 100vh;
    /* height: 100%; */
    background-color: #EEEEEE;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    /* padding-top: 1em; */
    align-items: center;
    /* gap: 3em; */

    
`
function index() {
  return (
    <>
    <Register>
        <Form/>
    <FormFooter/>
    </Register>
    </>

  )
}

export default index