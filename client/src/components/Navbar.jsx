import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = (props) => {
    let login = props.login
    if (!login) {
        var component =
            <div>
                <button class="m-2 btn btn-outline-success" type="submit"><Link to="/register">Register</Link></button>
                <button class="m-2 btn btn-outline-primary" type="submit"><Link to="/login">Login</Link></button>
            </div>
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand"><Link to="/"><b>Trends</b></Link></a>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <form class="d-flex">
                            <div className="items m-3">
                                <Link className="link" to="/">Home</Link>
                                <Link className="link" to="/add-product">Add Product</Link>
                                <Link className="link" to="/admin">Admin</Link>
                                <Link className="link" to="/product">Products</Link>
                                <Link className="link" to="/cart">Cart</Link>
                                <Link className="link" to="/billing">Billing</Link>
                                <Link className="link" to="/payment">Payment</Link>
                                <Link className="link" to="/history">History</Link>
                                <Link className="link" to="/delivery">Delivery</Link>
                                <Link className="link" to="/track">Track Ur Order</Link>
                            </div>
                            {component}
                            <div class="m-2 circle" type="submit"><Link to="/profile">P</Link></div>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
