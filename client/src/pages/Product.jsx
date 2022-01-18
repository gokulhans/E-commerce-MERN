import React from 'react'
import './Product.css'

const Product = (props) => {
    let state = props.state
    console.log(state);
    let products = state.products
    if (state.role) {
        var deletebtn = <h1>delete</h1>
    }

    let productsarray = []
    const addToCart = (e) => {
        let product = {}
        product.price = e.target.getAttribute("price");
        product.price = e.target.getAttribute("price");
        product.price = e.target.getAttribute("price");
        product.price = e.target.getAttribute("price");
        product.item = e.target.value 
        productsarray.push(product)
        localStorage.setItem('product',JSON.stringify(productsarray))  
    }
    

    return (

        <div className="row">
            {
                products.map((product, index) => (
                    <div>
                        <button value={product.item} price={product.price} onClick={(e) => {
                            addToCart(e)
                        }}>hlo</button>
                        <div className="card" key={index} >
                            <div className="view zoom overlay">
                                <img className="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.webp" alt="Sample" />
                                <h4 className="mb-0"><span className="badge badge-primary badge-pill badge-news">Sale</span></h4>
                                <a href="">
                                    <div className="mask">
                                        <img className="img-fluid w-100"
                                            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.webp" alt='ffd' />
                                        <div className="mask rgba-black-slight"></div>
                                    </div>
                                </a>
                            </div>

                            <div className="card-body text-center">

                                <h5>{product.item} </h5>
                                <p className="small text-muted text-uppercase mb-2">{product}</p>

                                <hr />
                                <h6 className="mb-3">
                                    <span className="text-danger mr-1">  {product
                                    } </span>
                                    <span className="text-grey"><s>$36.99</s></span>
                                </h6>
                                <p>  {product.des}</p>
                                <button type="button" className="btn btn-primary btn-sm mr-1 mb-2">
                                    <i className="fas fa-shopping-cart pr-2" ></i>Add to cart
                                </button>
                                <a className="btn btn-light btn-sm mr-1 mb-2">
                                    <i className="fas fa-info-circle pr-2"></i> Details
                                </a>
                                <button type="button" className="btn btn-danger btn-sm px-3 mb-2 material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to wishlist">
                                    <i className="far fa-heart"></i>
                                </button>

                                {deletebtn}
                            </div>

                        </div>
                    </div>
                ))}

            <h3>This is Product Page</h3>
        </div>
    )
}

export default Product