import React from 'react'
import './Product.css'

const Product = (props) => {
    let state = props.state
    console.log(state);
    let products = state.products
    if (state.role) {
        var deletebtn = <h1>delete</h1>
    }
    return (
        
        <div class="row">
            {
                products.map((product, index) => (
                    <div>


                        <div class="card" key={index} >

                            <div class="view zoom overlay">
                                <img class="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.webp" alt="Sample" />
                                <h4 class="mb-0"><span class="badge badge-primary badge-pill badge-news">Sale</span></h4>
                                <a href="#!">
                                    <div class="mask">
                                        <img class="img-fluid w-100"
                                            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.webp" alt='ffd'/>
                                        <div class="mask rgba-black-slight"></div>
                                    </div>
                                </a>
                            </div>

                            <div class="card-body text-center">

                                <h5>{product.item} </h5>
                                <p class="small text-muted text-uppercase mb-2">{product.type}</p>

                                <hr />
                                <h6 class="mb-3">
                                    <span class="text-danger mr-1">  {product.price} </span>
                                    <span class="text-grey"><s>$36.99</s></span>
                                </h6>
                                <p>  {product.des}</p>
                                <button type="button" class="btn btn-primary btn-sm mr-1 mb-2">
                                    <i class="fas fa-shopping-cart pr-2"></i>Add to cart
                                </button>
                                <button type="button" class="btn btn-light btn-sm mr-1 mb-2">
                                    <i class="fas fa-info-circle pr-2"></i>Details
                                </button>
                                <button type="button" class="btn btn-danger btn-sm px-3 mb-2 material-tooltip-main" data-toggle="tooltip" data-placement="top" title="Add to wishlist">
                                    <i class="far fa-heart"></i>
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