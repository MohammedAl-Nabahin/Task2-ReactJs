import React from 'react'
import  Service  from '../../Components/Service';

import { ExtraServices } from '../../mock/mock';

import {ServicesSection , Services} from './style';

function index() {
  return (
    <ServicesSection>
        <h2>Our extra services</h2>
        <Services>
        {ExtraServices.map((item , index) => 
              <Service key={index} title={item.title} src={item.url} alt="Service" imgSrc={item.imgSrc} />
            )}
        </Services>
    </ServicesSection>
  )
}

export default index