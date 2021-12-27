import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <img style={{ objectFit: "cover", width: 500, height: 500,margin:10,borderRadius:10 }} src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?cs=srgb&dl=pexels-photomix-company-230544.jpg&fm=jpg" alt="e-commerce"/>

        <Footer />
      </div>
    </>
  );
}

export default App;
