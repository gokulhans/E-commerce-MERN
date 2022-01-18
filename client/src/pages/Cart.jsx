import React from 'react'

function Cart() {

    var products = localStorage.getItem('product');

    products = JSON.parse(products)
    console.log(products);

    return (
        <>

            <div class="container bg-white">
                <div class="row">
                    {
                        products.map((product, index) => (
                            <>
                                <div key={index} className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                                    <div className="product"> <img src="https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                            <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li>
                                            <li className="icon mx-3"><span className="far fa-heart"></span></li>
                                            <li className="icon"><span className="fas fa-shopping-bag"></span></li>
                                        </ul>
                                    </div>
                                    <div className="tag bg-red">NEW</div>
                                    <div className="title pt-4 pb-1">{product.item}</div>
                                    <div className="title pt-4 pb-1">{product.type}</div>
                                    <div className="d-flex align-content-center justify-content-center"> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> </div>
                                    <div className="price">{product.price}</div>
                                </div>
                            </>
                        ))}
                </div>
            </div>
        </>
    )
}

export default Cart
