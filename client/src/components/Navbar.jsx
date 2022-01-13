import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav style={{ position: 'relative', top: 0}} class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Amazone</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item m-1">
                                <Link to="/">Home</Link>
                            </li>
                            <li class="nav-item m-1">
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li class="nav-item m-1">
                                <Link to="/product">Product</Link>
                            </li>
                            <li class="nav-item m-1">
                                <Link to="/register">Register</Link>
                            </li>
                            <li class="nav-item m-1">
                                <Link to="/login">Login</Link>
                            </li>
                            <li class="nav-item m-1">
                                <Link to="/admin">Admin</Link>
                            </li>
                            <li class="nav-item m-1">
                              <Link to="/add-product">Add Product</Link>                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
