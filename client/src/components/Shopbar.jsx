import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

const Shopbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand"><Link to="/"><b>Your Shop </b></Link></a>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <form className="d-flex">
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
