import React from 'react';
import FormInput from '../../../../Components/FormFields/FormInput';
import SubmitButton from '../../../../Components/FormFields/SubmitButton';

import Span from '../../../../Components/Span';

import { Coupon  , ApplyCoupon} from './style';

function index() {
  return (
    <Coupon>
        <Span data={"Have a coupone?"}/>
        <ApplyCoupon>
            <FormInput placeholder={"Add coupon"}/>
            <SubmitButton buttonText={"Apply"}/>
        </ApplyCoupon>
    </Coupon>
  )
}

export default index