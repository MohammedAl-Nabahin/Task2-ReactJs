import React from 'react';


import styled from 'styled-components';


import  FormInput  from '../FormFields/FormInput';
import SubmitButton from '../FormFields/SubmitButton';
import Icon from '../Icon'

import email from '../../images/icons/email.png';

const Newsletter = styled.div`
    width:100%;
    height: 190px;
    display: flex;
    flex-direction: column;
    background-color: #EFF2F4;
    justify-content: center;
    align-items: center;
    gap: 21px;
    
   

    .wtf{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h3{
        margin: 0;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        text-align: center;
        letter-spacing: -0.2px;
        color: #1C1C1C;
    }

    span{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        letter-spacing: -0.2px;
        color: #606060;
    }


    form{
        width: 392px;
        height: 40px;
        display: flex;
        flex-direction: row;
        gap: 8px;

            
            #newsButton{
                    width: 110px;
                    height: 40px;
                }

                .yourEmail{
                    width: 274px;
                    height: 40px;
                    background-color: white;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    /* gap: 1em; */
                    align-items: center;
                    padding-left: 0.5em;
                    border-radius: 6px;
                    gap: 6px;

        #emailInput{
            border: none;
            padding: 0;

            &::placeholder{
                padding: 0;
            }
        }

        img{
            width: 20.33px;
            height: 17.67px ;
        }
    }
    }


    




`;
function index({onSubmit}) {
  return (
    <Newsletter>
        <div className='wtf'>
        <h3>Subscribe on our newsletter</h3>
        <span>Get daily news on upcoming offers from many suppliers all over the world</span>
        </div>
        <form onSubmit={onSubmit}>
            <div className='yourEmail'>
                <Icon src={email} alt="email" id={"email"}/>
                <FormInput value={""} type="email" placeholder={"Email"} id="emailInput" />
            </div>
            <div>

            <SubmitButton type={"submit"} buttonText="Subscribe" id={"newsButton"}/>
            </div>
        </form>       
    </Newsletter>
  )
}

export default index