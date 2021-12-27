import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div style={{position:'relative',bottom:0}} class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p class="col-md-4 mb-0 text-muted">&copy; 2021 Company, Inc</p>

                    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    </a>

                    <ul class="nav col-md-4 justify-content-end">
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
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer
