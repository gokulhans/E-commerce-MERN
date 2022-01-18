import React from 'react'
import Product from '../components/Product';

function Cart() {

    var products = localStorage.getItem('product');

   products = JSON.parse(products)
   console.log(products);

    return (
        <>
             
             <div className="container bg-white">
                <div className="row">
                {
                products.map((product, index) => (
                    <Product product={product}/>
                ))}
                   
                </div>
            </div>


        </>
    )
}

export default Cart
