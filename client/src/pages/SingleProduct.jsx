import React from 'react'
import './SingleProduct.css'

function SingleProduct() {
    return (
        <div>
            <link rel='stylesheet' href='https://sachinchoolur.github.io/lightslider/dist/css/lightslider.css'/>
                <div className="container-fluid mt-2 mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-5 pr-2">
                            <div className="card">
                                <div className="demo">
                                    <ul id="lightSlider">
                                        <li data-thumb="https://i.imgur.com/KZpuufK.jpg"> <img src="https://i.imgur.com/KZpuufK.jpg" /> </li>                                      
                                    </ul>
                                </div>
                            </div>
                            <div className="card mt-2">
                                <h6>Reviews</h6>
                                <div className="d-flex flex-row">
                                    <div className="stars"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div> <span className="ml-1 font-weight-bold">4.6</span>
                                </div>
                                <hr/>
                                    <div className="badges"> <span className="badge bg-dark ">All </span> <span className="badge bg-dark "> <i className="fa fa-image"></i> 23 </span> <span className="badge bg-dark "> <i className="fa fa-comments-o"></i> 23 </span> <span className="badge bg-warning"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <span className="ml-1">2,123</span> </span> </div>
                                    <hr/>
                                        <div className="comment-section">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/o5uMfKo.jpg" className="rounded-circle profile-image"/>
                                                    <div className="d-flex flex-column ml-1 comment-profile">
                                                        <div className="comment-ratings"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div> <span className="username">Lori Benneth</span>
                                                    </div>
                                                </div>
                                                <div className="date"> <span className="text-muted">2 May</span> </div>
                                            </div>
                                            <hr/>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/tmdHXOY.jpg" className="rounded-circle profile-image"/>
                                                        <div className="d-flex flex-column ml-1 comment-profile">
                                                            <div className="comment-ratings"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div> <span className="username">Timona Simaung</span>
                                                        </div>
                                                    </div>
                                                    <div className="date"> <span className="text-muted">12 May</span> </div>
                                                </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="col-md-7">
                                <div className="card">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="p-ratings"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div> <span className="ml-1">5.0</span>
                                    </div>
                                    <div className="about"> <span className="font-weight-bold">IKEA x HAY Ypperlig Collection </span>
                                        <h4 className="font-weight-bold">3,444</h4>
                                    </div>
                                    <div className="buttons"> <button className="btn btn-outline-warning btn-long cart">Add to Cart</button> <button className="btn btn-warning btn-long buy">Buy it Now</button> <button className="btn btn-light wishlist"> <i className="fa fa-heart"></i> </button> </div>
                                    <hr/>
                                        <div className="product-description">
                                            <div><span className="font-weight-bold">Color:</span><span> blue</span></div>
                                            <div className="my-color"> <label className="radio"> <input type="radio" name="gender" value="MALE" checked/> <span className="red"></span> </label> <label className="radio"> <input type="radio" name="gender" value="FEMALE"/> <span className="blue"></span> </label> <label className="radio"> <input type="radio" name="gender" value="FEMALE"/> <span className="green"></span> </label> <label className="radio"> <input type="radio" name="gender" value="FEMALE"/> <span className="orange"></span> </label> </div>
                                            <div className="d-flex flex-row align-items-center"> <i className="fa fa-calendar-check-o"></i> <span className="ml-1">Delivery from sweden, 15-45 days</span> </div>
                                            <div className="mt-2"> <span className="font-weight-bold">Description</span>
                                                <p>The minimalist collaboration features chairs, lightening, Shelves, Sofas, Desks and various home accessories, all offering form and function at the same point.We use high-strength clamps and joinery techniques specially designed for engineered wood beds. Ergo, no irksome creaks - and you can sleep like a baby, well into adulthood!</p>
                                                <div className="bullets">
                                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Best in Quality</span> </div>
                                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Anti-creak joinery</span> </div>
                                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Sturdy laminate surfaces</span> </div>
                                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Relocation friendly design</span> </div>
                                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">High gloss, high style</span> </div>
                                                    <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Easy-access hydraulic storage</span> </div>
                                                </div>
                                            </div>
                                            <div className="mt-2"> <span className="font-weight-bold">Store</span> </div>
                                            <div className="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/N2fYgvD.png" className="rounded-circle store-image"/>
                                                <div className="d-flex flex-column ml-1 comment-profile">
                                                    <div className="comment-ratings"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div> <span className="username">Rare Boutique</span> <small className="followers">25K Followers</small>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                              
                        </div>
                        </div>
                    </div>
                 
                </div>
                )
}

                export default SingleProduct
