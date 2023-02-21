
//Furniture pics
import chair from '../images/furniture/chair.png';
import sofa from '../images/furniture/sofa.png';
import woodChair from '../images/furniture/woodChair.png';
import jar from '../images/furniture/jar.png';
import mixer from '../images/furniture/mixer.png';
import blender from '../images/furniture/blender.png';
import mat from '../images/furniture/mat.png';
import tree from '../images/furniture/tree.png';

//Tech pics
import watch from '../images/tech/appleWatch.png';
import camera from '../images/tech/camera.png';
import headphones from '../images/tech/headphone.png';
import heater from '../images/tech/heater.png';
import headset from '../images/tech/headSet.png';
import laptop from '../images/tech/laptop.png';
import ipad from '../images/tech/ipad.png';
import iphone from '../images/tech/iphone.png';
import phone from '../images/tech/phone.png';


//Recommended Items
import shirt from '../images/clothes/shirt.png';
import jacket from '../images/clothes/jacket.png';
import spor from '../images/clothes/spor.png';
import pok from '../images/clothes/pok.png';
import bag from '../images/clothes/backpack.png';
import shorts from '../images/clothes/shorts.png';

//Services
import worker from '../images/backgrounds/worker.png';
import search from '../images/icons/search.png';
import woods from '../images/backgrounds/woods.png';
import color from '../images/backgrounds/color.png';
import file from '../images/icons/file.png';
import plane from '../images/backgrounds/plane.png';
import send from '../images/icons/send.png';
import security from '../images/icons/security.png';

//Regions
import uae from '../images/countries/uae.png';
import au from '../images/countries/au.png';
import usa from '../images/countries/usa.png';
import ru from '../images/countries/ru.png';
import it from '../images/countries/it.png';
import dk from '../images/countries/dk.png';
import fr from '../images/countries/fr.png';
import chn from '../images/countries/chn.png';
import uk from '../images/countries/uk.png';


//tech
import watch2 from '../images/tech/watch2.png';
import heater2 from '../images/tech/heater2.png';
import headset2 from '../images/tech/headset2.png';
import laptop2 from '../images/tech/laptop2.png';
import ipad2 from '../images/tech/ipad2.png';
import iphone2 from '../images/tech/iphone2.png';
import bluePhone from '../images/tech/bluePhone.png';
import ipad3 from '../images/tech/ipad3.png';

//icon
import checkIcon from '../images/icons/checkIcon2.png';


//Clothes
import smallSpor from '../images/clothes/Group smallSpor.png'
import smallJacket from '../images/clothes/smallJacket.png'
import smallShirt from '../images/clothes/smallShirt.png'
import smallTshirt from '../images/clothes/smallTshirt.png'
import smallShirt2 from '../images/clothes/smallShirt2.png';

//Pay
import visa from '../images/icons/Visa.png'
import payoner from '../images/icons/payoner.png'
import pay from '../images/icons/pay.png'
import payment from '../images/icons/payment.png'
import paypal from '../images/icons/paypal.png'










const HomeItems = [
    {
        id :0,
        title:"Soft chairs",
        price:"From USD 19",
        url:chair
    },
    {
        id :1,
        title:"Soft and chair",
        price:"From USD 19",
        url:sofa
        },
    {
        id :2,
        title:"Kitchen dishes",
        price:"From USD 19",
        url:woodChair
        },
    {
        id :3,
        title:"Smart watches",
        price:"From USD 19",
        url:jar
    },
    {
        id :4,
        title:"Kitchen mixer",
        price:"From USD 100",
        url:mixer
    },
    {
        id :5,
        title:"Blenders",
        price:"From USD 39",
        url:blender
    },
    {
        id :6,
        title:"Home appliance",
        price:"From USD 19",
        url:mat
    },
    {
        id :7,
        title:"home tree",
        price:"From USD 10",
        url:tree
    }

];


const TechItem = [
    {id :0 , title:"Smart watches", price:"From USD 19" , url:watch},
    {id :1 , title:"Cameras" , price:"From USD 89" , url:camera},
    {id :2 , title:"Headphones" , price:"From USD 10" , url:headphones},
    {id :3 , title:"Smart watches" , price:"From USD 19" , url:heater},
    {id :4 , title:"Gaming set" , price:"From USD 35" , url:headset},
    {id :5 , title:"Laptops and PC" , price:"From USD 39" , url:laptop},
    {id :6 , title:"Smart phones" , price:"From USD 19" , url:ipad},
    {id :7 , title:"Electric kattle" , price:"From USD 240" , url:iphone}
];


const RecommendedItems = [
    {
        id:0,
        url:shirt,
        price:"$10.30",
        descreption:"T-shirts with multiple colors, for men"
    },
    {
        id:1,
        url:jacket,
        price:"$10.30",
        descreption:"Brown winter coat medium size"
    },
    {
        id:2,
        url:spor,
        price:"$12.30",
        descreption:"Blue winter coat medium size"
    },
    {
        id:3,
        url:pok,
        price:"$34.00",
        descreption:"Leather wallet"
    },
    {
        id:4,
        url:bag,
        price:"$99.00",
        descreption:"Jeans bag for travel for men"
    },
    {
        id:5,
        url:shorts,
        price:"$9.99",
        descreption:"Canon camera black, 100x zoom"
    },
    {
        id:6,
        url:headphones,
        price:"$8.99",
        descreption:"Canon camera black, 100x zoom"
    },
    {
        id:7,
        url:bag,
        price:"$99.00",
        descreption:"Jeans bag for travel for men"
    },
    {
        id:8,
        url:jar,
        price:"$10.30",
        descreption:"Jeans bag for travel for men"
    },
    {
        id:9,
        url:heater,
        price:"$80.30",
        descreption:"Jeans bag for travel for men"
    }

];



const ExtraServices =[
    {
        id:0,
        imgSrc:woods,
        url:search,
        title:"Source from Industry Hubs"
    },
    {
        id:1,
        imgSrc:color,
        url:file,
        title:"Customize Your Products"
    },
    {
        id:2,
        imgSrc:plane,
        url:send,
        title:"Fast, reliable shipping by ocean or air"
    },
    {
        id:3,
        imgSrc:worker,
        url:security,
        title:"Product monitoring and inspection"
    }
];

const Regions = [
    {
        id:0,
        flag:uae,
        country:"Arabic Emirates",
        domain:"shopname.ae"
    },
    {
        id:1,
        flag:au,
        country:"Austrlia",
        domain:"shopname.au"
    },
    {
        id:2,
        flag:usa,
        country:"United States",
        domain:"shopname.usa"
    },
    {
        id:3,
        flag:ru,
        country:"Russia",
        domain:"shopname.ru"
    },
    {
        id:4,
        flag:it,
        country:"Italy",
        domain:"shopname.it"
    },
    {
        id:5,
        flag:dk,
        country:"Denmark",
        domain:"shopname.dk"
    },
    {
        id:6,
        flag:fr,
        country:"France",
        domain:"shopname.ru"
    },
    {
        id:7,
        flag:uae,
        country:"Arabic Emirates",
        domain:"shopname.ae"
    },
    {
        id:8,
        flag:chn,
        country:"China",
        domain:"shopname.ch"
    },
    {
        id:9,
        flag:uk,
        country:"Great Britain",
        domain:"shopname.uk"
    }

];


const TechListFlex = [
    {   
        id:0,
        src:iphone,
        itemTitle:"Canon Cmera EOS 2000, Black 10x zoom",
        price:"$998.00",
        discount:"$1128.00",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {   
        id:1,
        src:phone,
        itemTitle:"Canon Cmera EOS 2000, Black 10x zoom",
        price:"$998.00",
        discount:"$1128.00",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {   
        id:2,
        src:ipad,
        itemTitle:"Canon Cmera EOS 2000, Black 10x zoom",
        price:"$998.00",
        discount:"$1128.00",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {   
        id:3,
        src:laptop,
        itemTitle:"GoPro HERO6 4K Action Camera - Black",
        price:"$998.00",
        discount:"$1128.00",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {   
        id:4,
        src:watch,
        itemTitle:"Canon Cmera EOS 2000, Black 10x zoom",
        price:"$998.00",
        discount:"$1128.00",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {   
        id:5,
        src:headphones,
        itemTitle:"GoPro HERO6 4K Action Camera - Black",
        price:"$998.00",
        discount:"$1128.00",
        info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    }


];


const RelatedItems = [
    {
        id:0,
        url:ipad2,
        title:"Xiaomi Redmi 8 Original ",
        price:"$32.00-$40.00"
    },
    {
        id:1,
        url:watch2,
        title:"Xiaomi Redmi 8 Original ",
        price:"$32.00-$40.00"
    },
    {
        id:2,
        url:headset2,
        title:"Xiaomi Redmi 8 Original ",
        price:"$32.00-$40.00"
    },
    {
        id:3,
        url:laptop2,
        title:"Xiaomi Redmi 8 Original ",
        price:"$32.00-$40.00"
    },
    {
        id:4,
        url:heater2,
        title:"Xiaomi Redmi 8 Original ",
        price:"$32.00-$40.00"
    },
    {
        id:5,
        url:iphone2,
        title:"Xiaomi Redmi 8 Original ",
        price:"$32.00-$40.00"
    }

];

const TechListGrid = [
    {
        id:0,
        src:iphone,
        price:"$99.55",
        discount:"$1128.00",
        title:"GoPro HERO6 4K Action Camera - Black",
        startsRated:"7.5"
    },
    {
        id:1,
        src:bluePhone,
        price:"$99.55",
        discount:"$1128.00",
        title:"GoPro HERO6 4K Action Camera - Black",
        startsRated:"7.5"
    },
    {
        id:2,
        src:phone,
        price:"$99.55",
        discount:"$1128.00",
        title:"GoPro HERO6 4K Action Camera - Black",
        startsRated:"7.5"
    },
    {
        id:3,
        src:ipad3,
        price:"$99.55",
        discount:"$1128.00",
        title:"GoPro HERO6 4K Action Camera - Black",
        startsRated:"7.5"
    },
    {
        id:4,
        src:camera,
        price:"$99.55",
        discount:"$1128.00",
        title:"GoPro HERO6 4K Action Camera - Black",
        startsRated:"7.5"
    },
    {
        id:5,
        src:iphone,
        price:"$99.55",
        discount:"$1128.00",
        title:"GoPro HERO6 4K Action Camera - Black",
        startsRated:"7.5"
    },
    {
        id:6,
        src:laptop,
        price:"$99.55",
        discount:"$1128.00",
        title:"GoPro HERO6 4K Action Camera - Black",
        startsRated:"7.5"
    },
    {
        id:7,
        src:watch,
        price:"$99.55",
        discount:"$1128.00",
        title:"GoPro HERO6 4K Action Camera - Black",
        startsRated:"5.5"
    },
    {
        id:8,
        src:bluePhone,
        price:"$99.55",
        discount:"$1128.00",
        title:"GoPro HERO6 4K Action Camera - Black",
        startsRated:"7.5"
    }
    

];


const DescriptionCheckList = [
    {
        id:0,
        src:checkIcon,
        info:"Some great feature name here"
    },
    {
        id:1,
        src:checkIcon,
        info:"Lorem ipsum dolor sit amet, consectetur"
    },
    {
        id:2,
        src:checkIcon,
        info:"Duis aute irure dolor in reprehenderit"
    },
    {
        id:3,
        src:checkIcon,
        info:"Some great feature name here"
    }
];


const YouMayLikeItems = [

    {
        id:0,
        src:smallSpor,
        title:"Apple Watch Series Space Gray",
        price:"$7.00 - $99.50"
    },
    {
        id:1,
        src:smallShirt,
        title:"Apple Watch Series Space Gray",
        price:"$7.00 - $99.50"
    },
    {
        id:2,
        src:smallJacket,
        title:"Apple Watch Series Space Gray",
        price:"$7.00 - $99.50"
    },{
        id:3,
        src:smallTshirt,
        title:"Apple Watch Series Space Gray",
        price:"$7.00 - $99.50"
    },
    {
        id:4,
        src:smallShirt2,
        title:"Apple Watch Series Space Gray",
        price:"$7.00 - $99.50"
    }

];


const WaysToPay = [
    {
        id:0,
        src:visa
    },
    {
        id:1,
        src:payoner
    },
    {
        id:2,
        src:payment
    }, {
        id:3,
        src:paypal
    },
    {
        id:4,
        src:pay
    }
];

const products = [];

export {HomeItems , TechItem , RecommendedItems , ExtraServices , Regions ,
     TechListFlex , RelatedItems , TechListGrid , DescriptionCheckList , YouMayLikeItems , WaysToPay ,products};