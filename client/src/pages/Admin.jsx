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
            <br/>
            <Link to="/profile">Profile</Link>
            <br/>
            <Link to="/product">Product</Link>
            <br/>
            <Link to="/register">Register</Link>
            <br/>
            <Link to="/login">Login</Link>
            <br/>
            <Link to="/add-product">Add Product</Link>
        </div>
    )
}

export default Admin