
import SignInForm from './Pages/SignIn/Form';
import Register from './Pages/Register';
import Home from './Pages/Home'
import  HeaderContainer  from './Components/Header';
import  Trending  from './Sections/Trending';
import  DealsContainer  from './Sections/Deals';
import LogIn from './Pages/SignIn';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
        {/* <SignInForm/> */}
        {/* <HeaderContainer/> */}
        {/* <Register/> */}
        {/* <Trending/>       */}
        {/* <DealsContainer/> */}

        {/* <LogIn/> */}

        <Routes>
          <Route path="/Login" element={<LogIn/>} />
          <Route path="/" element={<Register/>} />
          <Route path="/Home" element={<Home/>} />
         
          {/* <Route path="/Login" element={<LogIn/>} /> */}
        </Routes>
        
    </div>
  );
}

export default App;
