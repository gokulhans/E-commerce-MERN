import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <>

            <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav items me-auto mb-2 mb-lg-0">
                            <li class="nav-item m-1">
                                <Link to="/login">Login</Link>
                            </li>
                            <li class="nav-item m-1">
                                <Link to="/register">Register</Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
