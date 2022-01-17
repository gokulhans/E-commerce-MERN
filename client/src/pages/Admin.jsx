import React from 'react'
import { Link } from "react-router-dom";


const Admin = () => {
    return (
        <div>
            <h3>This is Admin Page</h3>

            {/* <form action="../../post" method="post"
                className="form">
                <button type="submit">Connected?</button>
            </form> */}

            <Link to="/">Home</Link>
            <br />
            <Link to="/profile">Profile</Link>
            <br />
            <Link to="/product">Product</Link>
            <br />
            <Link to="/register">Register</Link>
            <br />
            <Link to="/login">Login</Link>
            <br />
            <Link to="/add-product">Add Product</Link>
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
    )
}

export default Admin