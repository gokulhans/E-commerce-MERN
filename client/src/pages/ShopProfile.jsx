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

                <div class="card">
                    <div class="imgBox">
                        <img src="" alt="mouse corsair" class="mouse" />
                    </div>
                    <div class="contentBox">
                        <h3>Mouse Corsair M65</h3>
                        <h2 class="price">61.<small>98</small> €</h2>
                        <a href="#" class="buy">Buy Now</a>
                    </div>
                </div>
                <div class="card">
                    <div class="imgBox">
                        <img src="" alt="mouse corsair" class="mouse" />
                    </div>
                    <div class="contentBox">
                        <h3>Mouse Corsair M65</h3>
                        <h2 class="price">61.<small>98</small> €</h2>
                        <a href="#" class="buy">Buy Now</a>
                    </div>
                </div>
                <div class="card">
                    
                    <div class="imgBox">
                        <img src="" alt="mouse corsair" class="mouse" />
                    </div>
                    <div class="contentBox">
                        <h3>Mouse Corsair M65</h3>
                        <h2 class="price">61.<small>98</small> €</h2>
                        <a href="#" class="buy">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ShopProfile
