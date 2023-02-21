import React from 'react';

import { ItemDetailsBox , DescriptionHeader , HeaderItem , DescriptionText , Table , Td , Tr , Check} from './style';

import {DescriptionCheckList} from '../../mock/mock';

function index() {
  return (
    <ItemDetailsBox>
        <DescriptionHeader>
            <HeaderItem>Description</HeaderItem>
            <HeaderItem>Reviews</HeaderItem>
            <HeaderItem>Shipping</HeaderItem>
            <HeaderItem>About company</HeaderItem>
        </DescriptionHeader>

        <DescriptionText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br></br>
        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </DescriptionText>

        <Table>
            <tbody>
                <Tr>
                    <Td className="firstCol">Model</Td>
                    <Td>#8786867</Td>
                </Tr>

                <Tr>
                    <Td className="firstCol">Style</Td>
                    <Td>Classic style</Td>
                </Tr>

                <Tr>
                    <Td className="firstCol">Certtificate</Td>
                    <Td>ISO-898921212</Td>
                </Tr>

                <Tr> 
                    <Td className="firstCol">Size</Td>
                    <Td>34mm x 450mm x 19mm</Td>
                </Tr>

                <Tr>
                    <Td className="firstCol">Memory</Td>
                    <Td>36GB RAM</Td>
                </Tr>
            </tbody>
        </Table>
        <Check>
            {DescriptionCheckList.map((item)=>
                <div key={item.id}><img src={item.src} alt=""/>{item.info}</div>
            )}
        </Check>
    </ItemDetailsBox>
  )
}

export default index