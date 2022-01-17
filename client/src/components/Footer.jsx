import React from 'react'
import { Link } from "react-router-dom";
import './Footer.css'
const Footer = (props) => {
    const linkStyle = {
        textDecoration: "none",
        color: 'blue'
      };

    let add
    let role = props.role
    if (role) {
        add = <li class="nav-item m-1">
            <Link to="/add-product" style={linkStyle}>Add Product</Link>
        </li>
    }

    return (
        <div>
            <div style={{ position: 'relative', bottom: 0 }} class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p class="col-md-4 mb-0 text-muted">&copy; 2021 gbroz Company, Inc</p>

                    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    </a>

                    <ul class="nav col-md-4 justify-content-end">
                        <li class="nav-item m-1">
                            <Link to="/admin" style={linkStyle}>Admin</Link>
                        </li>
                        <li class="nav-item m-1">
                            <Link to="/shop-register" style={linkStyle}>ShopRegister</Link>
                        </li>
                        <li class="nav-item m-1">
                            <Link to="/shop-login" style={linkStyle}>ShopLogin</Link>
                        </li>
                        <li class="nav-item m-1">
                            <Link to="/shop-profile" style={linkStyle}>ShopProfile</Link>
                        </li>
                        {add}
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer
