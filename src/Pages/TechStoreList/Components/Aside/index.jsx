import React from 'react';

import { Aside } from './style';

import ListContainer from '../AsideList';
import LabelAndInput from '../../../../Components/FormFields/LabelAndInput';
import SubmitButton  from '../../../../Components/FormFields/SubmitButton';

function index() {
  return (
    <Aside>
        <form>

        <ListContainer 
            title="Category" option1={"Mobile accessory"} option2="Electronics" option3={"Smartphones"} option4="Modern tech"
         containerId="all" />
        <ListContainer
            title="Brands" option1={<LabelAndInput containerId={"options"} labelText={"Samsung"} type="checkbox" id={"check"}
            value=""
            />}
            option2={<LabelAndInput containerId={"options"} labelText={"Apple"} type="checkbox" id={"check"}
            value=""
            />} 
            option3={<LabelAndInput containerId={"options"} labelText={"Huawei"} type="checkbox" id={"check"}
            value=""
            />}
            option4={<LabelAndInput containerId={"options"} labelText={"Pocco"} type="checkbox" id={"check"}
            value=""
            />}
            option5={<LabelAndInput containerId={"options"} labelText={"Lenovo"} type="checkbox" id={"check"}
            value=""
            />} 
        />
        
        <ListContainer
            title="Features" option1={<LabelAndInput containerId={"options"} labelText={"Metallic"} type="checkbox" id={"check2"}
            value=""
            />}
            option2={<LabelAndInput containerId={"options"} labelText={"Plastic cover"} type="checkbox" id={"check2"}
            value=""
            />} 
            option3={<LabelAndInput containerId={"options"} labelText={"8GB Ram"} type="checkbox" id={"check2"}
            value=""
            />}
            option4={<LabelAndInput containerId={"options"} labelText={"Super power"} type="checkbox" id={"check2"}
            value=""
            />}
            option5={<LabelAndInput containerId={"options"} labelText={"Large Memory"} type="checkbox" id={"check2"}
            value=""
            />} 
        />

        <div>
        <ListContainer 
            title="Price range"
             option1={<LabelAndInput labelText={"Min"} type="text" id={"min"} value=""
            placeholder={"0"}/>} 
            option2={<LabelAndInput labelText={"Max"} type="text" id={"max"} value=""
            placeholder={"99999"}/>}
             option3={<SubmitButton buttonText={"Apply"} id="apply" type={"submit"}/>}
        />
        </div>

        <ListContainer
            title="Condition" option1={<LabelAndInput containerId={"options"} labelText={"Any"} type="radio" id={"check"}
            value=""
            />}
            option2={<LabelAndInput containerId={"options"} labelText={"Refurbished"} type="radio" id={"check"}
            value=""
            />}
            option3={<LabelAndInput containerId={"options"} labelText={"Brand new"} type="radio" id={"check"}
            value=""
            />}
            option4={<LabelAndInput containerId={"options"} labelText={"Old items"} type="radio" id={"check"}
            value=""
            />}
        />
        </form>
    </Aside>
  )
}

export default index