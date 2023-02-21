
// import SignInForm from './Pages/SignIn/Form';
import Register from './Pages/Register';
import Home from './Pages/Home'
import Cart from './Pages/Cart';
import LogIn from './Pages/SignIn';
import TechStoreList from './Pages/TechStoreList';
import ProductProvider from './contexts/productContext'


import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './global';

// import styled from 'styled-components';
import  ItemPage  from './Pages/ItemPage';


function App() {
  return (
    <div>
      <ProductProvider>

        <GlobalStyle/>

        <Routes>
          <Route path="/Login" element={<LogIn/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/Tech" element={<TechStoreList/>} />
          <Route path="/Item" element={<ItemPage/>} />
          <Route path="/cart" element={<Cart/>} />

        </Routes>
      </ProductProvider>

        
    </div>
  );
}

export default App;
