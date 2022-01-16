import React, { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css'

import { useEffect } from 'react'
import AddProduct from "./pages/AddProduct";
import Test from "./pages/Test";


function App() {
 
  const [products, setproducts] = useState('');
  const [role, setrole] = useState('');
  const [login, setlogin] = useState('');

  useEffect(() => {
    fetch("users").then(response=>response.json())
    .then(data=>{
      setlogin(data.login)
      setrole(data.role)
    })
  fetch("products").then(response=>response.json())
  .then(data=>{
      setproducts(data)
  })

  
    },[]);
    console.log(products);
    console.log(role);
    let state = {};
    state.products = products
    state.role = role
  return (
    <>
      <div>
        <Navbar login={login} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product state={state} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>

        <Footer role={role} />
      </div>
    </>
  );
}

export default App;
 