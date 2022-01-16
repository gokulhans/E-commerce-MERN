import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = (props) => {
    let login = props.login
    if (login) {
        var component = <ul class="navbar-nav log me-auto mb-2 mb-lg-0">
            <li class="nav-item m-1">
                <Link to="/login">Login</Link>
            </li>
            <li class="nav-item m-1">
                <Link to="/register">Register</Link>
            </li>
        </ul>
    }
    return (
        <>
            {/* <div>
        <Link to="/test">Test</Link>
                <nav style={{ position: 'relative', top: 0 }} class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/"><b>Trends</b></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            
                        </div>
                    </div>
                </nav>
            </div> */}


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
                            </div>
                            {component}
                            <button class="m-2 btn btn-outline-primary" type="submit"><Link to="/login">Login</Link></button>
                            <button class="m-2 btn btn-outline-success" type="submit"><Link to="/register">Register</Link></button>
                            <div class="m-2 circle" type="submit"><Link to="/profile">P</Link></div>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
