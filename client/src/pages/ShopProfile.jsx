import React from 'react'
import Shopbar from '../components/Shopbar'
import './ShopProfile.css'

const ShopProfile = () => {
    return (
        <>
        <Shopbar/>
        <div>
            <h1 style={{ color: 'green' }}>OPPO</h1>

            <h4>All Products</h4>
            <div className="row">

                <div className="card">
                    <div className="imgBox">
                        <img src="" alt="mouse corsair" className="mouse" />
                    </div>
                    <div className="contentBox">
                        <h3>Mouse Corsair M65</h3>
                        <h2 className="price">61.<small>98</small> €</h2>
                        <a href="#" className="buy">Buy Now</a>
                    </div>
                </div>
                <div className="card">
                    <div className="imgBox">
                        <img src="" alt="mouse corsair" className="mouse" />
                    </div>
                    <div className="contentBox">
                        <h3>Mouse Corsair M65</h3>
                        <h2 className="price">61.<small>98</small> €</h2>
                        <a href="#" className="buy">Buy Now</a>
                    </div>
                </div>
                <div className="card">
                    
                    <div className="imgBox">
                        <img src="" alt="mouse corsair" className="mouse" />
                    </div>
                    <div className="contentBox">
                        <h3>Mouse Corsair M65</h3>
                        <h2 className="price">61.<small>98</small> €</h2>
                        <a href="#" className="buy">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ShopProfile
