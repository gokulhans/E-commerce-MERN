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
            <div>
        <Link to="/test">Test</Link>
                <nav style={{ position: 'relative', top: 0 }} class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/"><b>Trends</b></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            {component}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
