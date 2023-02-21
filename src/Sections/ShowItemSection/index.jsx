import React, { useEffect, useState } from 'react';

import { ShowItemContainer  , PicViewer, Pics , Pic , View , ItemInfo , Rating ,
   Prices , Pr , ItemData , Data , Line , SendBox , SendInfo , Info , Buttons} from './style';

import Icon from '../../Components/Icon';

import shirt1 from '../../images/clothes/shirt1.png';
import shirt2 from '../../images/clothes/shirt2.png';
import shirt3 from '../../images/clothes/shirt3.png';
import shirt4 from '../../images/clothes/shirt4.png';
import shirt5 from '../../images/clothes/shirt5.png';
import shirt6 from '../../images/clothes/shirt1.png';
import check from '../../images/icons/check.png';
import rating from '../../images/icons/rating.png';
import supplier from '../../images/icons/supplier.png';
import uk from '../../images/countries/uk.png';
import verified from '../../images/icons/verified_user.png';
import world from '../../images/icons/language.png';

import Span from '../../Components/Span';


function Index() {
  const [pic , setPic] = useState(shirt1);


  useEffect(()=>{
   
    setPic(pic);
   
  },[pic])

  return (
    <ShowItemContainer>
        <PicViewer>
            <View>
            <Icon src={pic} id="view" width={"345px"} height="345px"/>
            </View>

            <Pics>
                <Pic onClick={()=>setPic(shirt1)} className="pic">
                  <Icon src={shirt1} width="56px" height={"54px"}/>
                </Pic>
                <Pic onClick={()=>setPic(shirt2)}>
                  <Icon src={shirt2} />
                </Pic>
                <Pic onClick={()=>setPic(shirt3)}>
                  <Icon src={shirt3}/>
                </Pic>
                <Pic onClick={()=>setPic(shirt4)}>
                  <Icon src={shirt4}/>
                </Pic>
                <Pic onClick={()=>setPic(shirt5)}>
                  <Icon src={shirt5}/>
                </Pic>
                <Pic onClick={()=>setPic(shirt6)}>
                  <Icon src={shirt6} width="56px" height={"54px"}/>
                </Pic>
            </Pics>
        </PicViewer>

        <ItemInfo>
      <div className='stock'>
      <Icon src={check} alt="check"/><Span data="in stock"/>
        </div> 
            <p>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</p>
            <Rating>
               <span className="myStars">
                 <Icon src={rating} alt="rating" id='star'/>
                    <Span className={"gold"} data="9.3"/>
                </span>
                <div className='divider'></div>
                <Span data="32 reviews" className="orders"/>
                <div className='divider'></div>
                <Span className='green' data="154 sold"/>
            </Rating>
            <Prices>
                <Pr>
                  <h3 id='red'>$98.00</h3>
                  <span>50-100 pcs</span>
                </Pr>
                <Pr>
                  <h3>$90.00</h3>
                  <span>100-700 pcs</span>
                </Pr>
                <Pr>
                  <h3>$78.00</h3>
                  <span>+700 pcs</span>
                </Pr>
            </Prices>
            <ItemData>
                <Data>
                  <span>Price:</span>
                  <span>Negotiable</span>
                </Data>
                <Line/>
                <Data>
                  <span>Type:</span>
                  <span>Classic  shoes</span>
                </Data>
                <Data>
                  <span>Material:</span>
                  <span>Plastic material</span>
                </Data>
                <Data>
                  <span>Design:</span>
                  <span>Modern nice</span>
                </Data>
                <Line/>
                <Data>
                  <span>Customization:</span>
                  <span>Customized logo</span>
                </Data>
                <Data>
                  <span>Protection:</span>
                  <span>Refund Policy</span>
                </Data>
                <Data>
                  <span>Warranty:</span>
                  <span>2 years full warranty </span>
                </Data>
                <Line/>
            </ItemData>
            </ItemInfo>

            <SendBox>
                <Icon src={supplier} id="supp"/>
                <Line/>

                <SendInfo>
                  <Info>
                    <Icon src={uk}/>
                    <Span data={"Germany, Berlin"}/>
                  </Info>
                  <Info>
                    <Icon src={verified}/>
                    <Span data={"Verified Seller"}/>
                  </Info>
                  <Info>
                    <Icon src={world}/>
                    <Span data={'Worldwide shipping'}/>
                  </Info>
                </SendInfo>

                <Buttons>
                    <button id='send'>Send inquiry</button>
                    <button >Seller's profile</button>
                </Buttons>
            </SendBox>
        
    </ShowItemContainer>
  )
}

export default Index;