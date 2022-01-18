import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = (props) => {



    let navbar = props.navbar
    if (navbar.login) {
        
        var profile =     <button className="m-2 btn btn-primary" type="submit"><Link to="/profile">{navbar.user.name}</Link></button>
    }

    if (!navbar.login) {
        var component =
            <div>
                <button className="m-2 btn btn-outline-success" type="submit"><Link to="/register">Register</Link></button>
                <button className="m-2 btn btn-outline-primary" type="submit"><Link to="/login">Login</Link></button>
            </div>
    }
    

    // const Logout = (e) => {

    //     fetch("users/logout").then(response => response.json())
    //         .then(data => {
    //             login = data
    //         })
    // }
    // if (login) {
    //     var logout = <button className="m-2 btn btn-outline-danger" onClick={(e) => { Logout(e) }} type="submit">LOGOUT</button>
    // }

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand"><Link to="/"><b>Fasino</b></Link></a>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <form className="d-flex">
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
                     
                                                {component}  {profile}
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
