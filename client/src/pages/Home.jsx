import React from 'react'
import Product from '../components/Product'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="main">
                <div className="head">
                    <h1 className="head1">FASINO</h1>
                    <h3 className="head2">Where The World Find Their Fashion</h3>
                </div>
                <img className="image" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                <h1 className="sub-head">Shop Now</h1>
            </div>


            <div class="container bg-white">
                <div class="row">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </>
    )
}

export default Home
