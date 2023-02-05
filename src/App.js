
// import SignInForm from './Pages/SignIn/Form';
import Register from './Pages/Register';
import Home from './Pages/Home'
// import  HeaderContainer  from './Components/Header';
// import  Trending  from './Sections/Trending';
// import  DealsContainer  from './Sections/Deals';
import LogIn from './Pages/SignIn';
import TechStoreList from './Pages/TechStoreList';


import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './global';

// import styled from 'styled-components';
import  ShowItemContainer  from './Sections/ShowItemSection';
import  ItemPage  from './Pages/ItemPage';


function App() {
  return (
    <div>
        {/* <SignInForm/> */}
        {/* <HeaderContainer/> */}
        {/* <Register/> */}
        {/* <Trending/>       */}
        {/* <DealsContainer/> */}

        {/* <LogIn/> */}
        <GlobalStyle/>

        <Routes>
          <Route path="/Login" element={<LogIn/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/Tech" element={<TechStoreList/>} />
          <Route path="/Item" element={<ItemPage/>} />


         
          {/* <Route path="/Login" element={<LogIn/>} /> */}
        </Routes>
        
    </div>
  );
}

export default App;
