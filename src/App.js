import React from 'react';
import CFucntionClick from './components/CFucntionClick';
import Stylesheet from './components/Stylesheet';
import Style from './components/appmodule.css';
import './components/appstyle.css';
import Form from './components/Form';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Header from './components/Header';
import Update from './components/Update';
import Product from './components/lifecycle/Product';
import Data from './components/Data';
import PostData from './components/PostData';
import Counter from './components/Counter';
import HookObject from './components/HookObject';
import Retrieve from './components/Retrieve';
import Fretrieve from './components/Fretrieve';
import A from './components/A';
import Ajay from './components/Ajay';
import Sushant from './components/Sushant';
import Vikas from './components/Vikas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SignUp } from './components/form validation/SignUp';

function App() {

  // function changeEvent(){
  //   console.log('chnge Event');
  // }
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-5'>
          <SignUp/>
        </div>
      </div>

     {/* <h1>App</h1> */}
     {/* <Navbar/> */}

     {/* <Ajay/> */}
     {/* <Sushant/> */}
     {/* <Vikas/> */}
     {/* <A/> */}
     {/* <Fretrieve/> */}
     {/* <Retrieve/> */}
     {/* <HookObject/> */}
     {/* <Counter/> */}
     {/* <PostData/> */}
     {/* <Data/> */}
     {/* <Update count={12}/> */}
     {/* <Product/> */}
     {/* <Header color="yellow"/> */}
{/* <Router> */}
     {/* <Routes> */}
      {/* <Route path="/" exact element={<Home/>} /> */}
      {/* </Routes> */}
      {/* <Routes> */}
      {/* <Route path='/about' exact element={<About/>}/> */}
      {/* </Routes> */}
      {/* <Routes> */}
      {/* <Route path='/contact' exact element={<Contact/>}/> */}
      {/* <Route path='/products' exact element={<Products/>}/> */}
      {/* </Routes> */}
      {/* <Routes> */}
      {/* <Route path='/navbar' element={<Navbar/>}/> */}
     {/* </Routes> */}
     {/* </Router> */}
     {/* <Form/> */}
     {/* <h1 className={Style.success}>Green</h1> */}
     {/* <h1 className='error'>Error</h1> */}
     {/* <Stylesheet isValue={true}/> */}
     {/* <CFucntionClick roll={27} numbers = {[12,15,18,21,24,27,30]}/> */}
     {/* <button onClick={changeEvent}>Change</button> */}
    </div>
  );
}

export default App;
