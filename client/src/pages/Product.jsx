import React from 'react'
import '../pages/Home.css'
import './Product.css'

const Product = (props) => {
    let state = props.state
    console.log(state);
    let products = state.products
    // if (state.role) {
    //     var deletebtn = <h1>delete</h1>
    // }



    let productsarray = [1, 2]

    const addToCart = (e) => {
        let product = {}
        product.price = e.target.getAttribute("price");

        product.item = e.target.value
        console.log('added');
        productsarray.push(product)
        localStorage.setItem('product', JSON.stringify(productsarray))

    }

    // function duplicate(array, product) {
    //     array.forEach(element => {
    //         var add
    //         if (element.item == product.item) {
    //             console.log('duplicated');
    //             add = false
    //         } else {
    //             add = true
    //         }

    //         if (add) {
    //             console.log('added');
    //             productsarray.push(product)
    //             localStorage.setItem('product', JSON.stringify(productsarray))
    //         } else {
    //             return null
    //         }
    //     });
    // }

    return (
        <div className="container bg-white">

            <div class="row">
                {
                    products.map((product, index) => (
                        <>
                            <button value={product.item} price={product.price} onClick={(e) => {
                                addToCart(e)
                            }}>hlo</button>

                            <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                                <div className="product"> <img src="https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                    <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                        <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li>
                                        <li className="icon mx-3"><span className="far fa-heart"></span></li>
                                        <li className="icon"><span className="fas fa-shopping-bag"></span></li>
                                    </ul>
                                </div>
                                <div className="tag bg-red">{product.item}</div>
                                <div className="title pt-4 pb-1">{product.type}</div>
                                <div className="d-flex align-content-center justify-content-center"> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> </div>
                                <div className="price">{product.price}</div>
                            </div>

                        </>
                    ))}

                <h3>This is Product Page</h3>
            </div>
        </div>
    )
}

export default Product