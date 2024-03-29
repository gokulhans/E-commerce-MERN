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
import History from "./pages/History";
import Track from "./pages/Track";
import SingleProduct from "./pages/SingleProduct";
import ShopRegister from "./pages/ShopRegister";
import ShopLogin from "./pages/ShopLogin";
import ShopProfile from "./pages/ShopProfile";
import Done from "./pages/Done";


function App() {

  const [products, setproducts] = useState('');
  const [role, setrole] = useState('');
  const [login, setlogin] = useState('');
  const [user, setuser] = useState('');

  useEffect(() => {
    fetch("cart", {
      method: "get"
    }).then(response => response.json()).then((data) => {
      localStorage.setItem("cartproducts", JSON.stringify(data));
    })


    fetch("users").then(response => response.json())
      .then(data => {
        console.log(data);
        setlogin(data.login)
        setrole(data.role)
        setuser(data.user)
      })

    fetch("shop").then(response => response.json())
      .then(data => {
        setlogin(data.login)
        setrole(data.role)
      })
    fetch("products").then(response => response.json())
      .then(data => {
        setproducts(data)
      })
  }, []);




  let state = {};
  state.products = products
  state.role = role

  let navbar = { login: '', user: '' }
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
          <Route path="/track" element={<Track />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/shop-register" element={<ShopRegister />} />
          <Route path="/shop-login" element={<ShopLogin />} />
          <Route path="/shop-profile" element={<ShopProfile />} />
          <Route path="/payment-done" element={<Done />} />
        </Routes>
        <Footer role={role} />
      </div>
    </>
  );
}

export default App;
