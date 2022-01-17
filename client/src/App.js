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
import Cart from "./pages/Cart";
import Billing from "./pages/Billing";
import Payment from "./pages/Payment";
import Delivary from "./pages/Delivery";
import History from "./pages/History";
import Track from "./pages/Track";
import SingleProduct from "./pages/SingleProduct";
import ShopRegister from "./pages/ShopRegister";
import ShopLogin from "./pages/ShopLogin";
import ShopProfile from "./pages/ShopProfile";


function App() {

  const [products, setproducts] = useState('');
  const [role, setrole] = useState('');
  const [login, setlogin] = useState('');
  const [user, setuser] = useState('');

  useEffect(() => {
    fetch("users").then(response => response.json())
      .then(data => {
        setlogin(data.login)
        setrole(data.role)
        setuser(data.user)
      })
    fetch("products").then(response => response.json())
      .then(data => {
        setproducts(data)
      })


  }, []);
  console.log(products);
  console.log(role);
  console.log('login'+login);
  let state = {};
  state.products = products
  state.role = role

  let navbar = {}
  navbar.login = login
  navbar.user = user
  return (
    <>
      <div>
        <Navbar navbar={navbar} />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/product" element={<Product state={state} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/history" element={<History />} />
          <Route path="/delivery" element={<Delivary />} />
          <Route path="/track" element={<Track />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/shop-register" element={<ShopRegister />} />
          <Route path="/shop-login" element={<ShopLogin />} />
          <Route path="/shop-profile" element={<ShopProfile />} />
        </Routes>
        <Footer role={role} />
      </div>
    </>
  );
}

export default App;
