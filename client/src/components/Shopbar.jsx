import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

const Shopbar = () => {

    return (
        <>
            <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand"><Link to="/"><b>Your Shop </b></Link></a>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <form class="d-flex">
                            <div className="items m-3">
                                <Link className="link" to="/">Home</Link>
                                <Link className="link" to="/add-product">Add Product</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Shopbar
