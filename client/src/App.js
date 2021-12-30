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

import { useEffect } from 'react'
import AddProduct from "./pages/AddProduct";


function App() {
  const [state, setstate] = useState('');

  useEffect(()=>{
    getProduct()
  },[])

const getProduct = () =>{
    console.log('sjdbfdhs');
    fetch("product").then(response=>response.json())
    .then(data=>{
      console.log(data);
        setstate(data)
    })
}

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product data={state} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-product" element={<AddProduct />} />
          
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
 