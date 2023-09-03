import logo from './logo.svg';
import './App.css';
import Search from './components/search.js'
import Product from './components/productList';
import React, { useState } from "react";
import { BrowserRouter,Routes,Route,Link, Router } from 'react-router-dom';
import LoginForm from './components/loginForm';
import Addproduct from './components/productForm';
import UseEffectDemo from './components/useeffectdemo';
import './demo.module.css';
import ViewProduct from './Viewproduct';
import Counter from './components/useReduceDemo';
import BankAccount from './components/bankaccount';
import Registation from './components/registationForm';
import { useEffect } from 'react';
import Logout from './components/logout';

function App() {
  let [username,setUsername]=useState('')
  let [authorities,setAuthorities]=useState('')
  useEffect(()=>{
    setUsername(localStorage.getItem("username"))
    setAuthorities(localStorage.getItem("authorites"))
  },[])

   //let products=[{
  //   id:'1',
  //   name:'apple',
  //   price:'100.0',
  //   quantity:12,
  //   category:'fruits'
  //   },{
  //     id:'2',
  //   name:'mango',
  //   price:'80',
  //   quantity:13,
  //   category:'fruits'
  //   },{
  //   id:'2',
  //   name:'bannana',
  //   price:'50.0',
  //   quantity:11,
  //   category:'fruits'
  //   }]
    
  return(
 
    <div className='App'>
  <BrowserRouter>
    <nav className='nav navbar-expand navbar-dark'>
      <div className='nav-link' style={{backgroundColor:"gold"}}>
       <Link to="/products">Product</Link>
     </div>
     {!username ? <div className="nav-link" style={{backgroundColor:"burlywood"}}>
       <Link to="/loginForm">Login</Link>
       </div> : <div className="nav-link">
        <Link to ="/logout">logout</Link>
     </div>}
     {!username ? <div className='nav-link' style={{backgroundColor:"coral"}}>
       <Link  to="/Registation">Registation</Link>
     </div>:''
  }
  {authorities==='Admin'?
     <div className='nav-link' style={{backgroundColor:"rosybrown"}}>
       <Link to="/productForm">Addproduct</Link>

     </div> :''
}
     { authorities==='User'?
      <div className='nav-link'>Offers</div>:''}
      {  username? <div className='nav-link'>
      welcome{username}</div>:''
    }
     {/* <div className='nav-link'>
       <Link to="/useReduceDemo">Counter</Link>
     </div> */}
      {/* <div className='nav-link'>
       <Link to="/useeffectDemo">View Products</Link>
     </div> */}
     {/* <div className='nav-link' style={{backgroundColor:"burlywood"}}>
       <Link  to="/Registation">Registation</Link>
     </div> */}
     
      </nav>
       <h1 style={{backgroundColor:'rebeccapurple',color:"GrayText"}}>HI AM REACT OWNER</h1>
    
      <Routes>
        <Route path='/products' element={<Product/>}/>
        <Route path='/loginForm' element={<LoginForm setUsername={setUsername} 
        setAuthorities={setAuthorities}/>}></Route>
        <Route path='/productForm' element={<Addproduct/>}></Route>
        <Route path='/useeffectdemo' element={<UseEffectDemo />}></Route>
        <Route path='/edit/:id' element={<Addproduct/>}></Route>
        <Route path='/viewproduct/:id' element={<ViewProduct/>}></Route>
        <Route path='/useReduceDemo' element={<Counter/>}></Route>
        <Route path='/Registation' element={<Registation/>}></Route>
        <Route path='logout' element={<Logout setUsername={setUsername}
        setAuthorities={setAuthorities}/>}></Route>
      
      </Routes>
      
   </BrowserRouter>
  
    <BankAccount></BankAccount>
 </div>
  );
}

export default App;
