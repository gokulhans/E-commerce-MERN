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
 
  const [products, setproducts] = useState('');

  useEffect(() => {
  fetch("products").then(response=>response.json())
  .then(data=>{
      setproducts(data)
  })
    },[]);
console.log(products);
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product data={products} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
 