import React from 'react'
import './SingleProduct.css'

function SingleProduct() {
    return (
        <div>
            <link rel='stylesheet' href='https://sachinchoolur.github.io/lightslider/dist/css/lightslider.css'/>
                <div class="container-fluid mt-2 mb-3">
                    <div class="row no-gutters">
                        <div class="col-md-5 pr-2">
                            <div class="card">
                                <div class="demo">
                                    <ul id="lightSlider">
                                        <li data-thumb="https://i.imgur.com/KZpuufK.jpg"> <img src="https://i.imgur.com/KZpuufK.jpg" /> </li>                                      
                                    </ul>
                                </div>
                            </div>
                            <div class="card mt-2">
                                <h6>Reviews</h6>
                                <div class="d-flex flex-row">
                                    <div class="stars"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div> <span class="ml-1 font-weight-bold">4.6</span>
                                </div>
                                <hr/>
                                    <div class="badges"> <span class="badge bg-dark ">All </span> <span class="badge bg-dark "> <i class="fa fa-image"></i> 23 </span> <span class="badge bg-dark "> <i class="fa fa-comments-o"></i> 23 </span> <span class="badge bg-warning"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <span class="ml-1">2,123</span> </span> </div>
                                    <hr/>
                                        <div class="comment-section">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/o5uMfKo.jpg" class="rounded-circle profile-image"/>
                                                    <div class="d-flex flex-column ml-1 comment-profile">
                                                        <div class="comment-ratings"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div> <span class="username">Lori Benneth</span>
                                                    </div>
                                                </div>
                                                <div class="date"> <span class="text-muted">2 May</span> </div>
                                            </div>
                                            <hr/>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/tmdHXOY.jpg" class="rounded-circle profile-image"/>
                                                        <div class="d-flex flex-column ml-1 comment-profile">
                                                            <div class="comment-ratings"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div> <span class="username">Timona Simaung</span>
                                                        </div>
                                                    </div>
                                                    <div class="date"> <span class="text-muted">12 May</span> </div>
                                                </div>
                                        </div>
                                    </div>
                            </div>
                            <div class="col-md-7">
                                <div class="card">
                                    <div class="d-flex flex-row align-items-center">
                                        <div class="p-ratings"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div> <span class="ml-1">5.0</span>
                                    </div>
                                    <div class="about"> <span class="font-weight-bold">IKEA x HAY Ypperlig Collection </span>
                                        <h4 class="font-weight-bold">3,444</h4>
                                    </div>
                                    <div class="buttons"> <button class="btn btn-outline-warning btn-long cart">Add to Cart</button> <button class="btn btn-warning btn-long buy">Buy it Now</button> <button class="btn btn-light wishlist"> <i class="fa fa-heart"></i> </button> </div>
                                    <hr/>
                                        <div class="product-description">
                                            <div><span class="font-weight-bold">Color:</span><span> blue</span></div>
                                            <div class="my-color"> <label class="radio"> <input type="radio" name="gender" value="MALE" checked/> <span class="red"></span> </label> <label class="radio"> <input type="radio" name="gender" value="FEMALE"/> <span class="blue"></span> </label> <label class="radio"> <input type="radio" name="gender" value="FEMALE"/> <span class="green"></span> </label> <label class="radio"> <input type="radio" name="gender" value="FEMALE"/> <span class="orange"></span> </label> </div>
                                            <div class="d-flex flex-row align-items-center"> <i class="fa fa-calendar-check-o"></i> <span class="ml-1">Delivery from sweden, 15-45 days</span> </div>
                                            <div class="mt-2"> <span class="font-weight-bold">Description</span>
                                                <p>The minimalist collaboration features chairs, lightening, Shelves, Sofas, Desks and various home accessories, all offering form and function at the same point.We use high-strength clamps and joinery techniques specially designed for engineered wood beds. Ergo, no irksome creaks - and you can sleep like a baby, well into adulthood!</p>
                                                <div class="bullets">
                                                    <div class="d-flex align-items-center"> <span class="dot"></span> <span class="bullet-text">Best in Quality</span> </div>
                                                    <div class="d-flex align-items-center"> <span class="dot"></span> <span class="bullet-text">Anti-creak joinery</span> </div>
                                                    <div class="d-flex align-items-center"> <span class="dot"></span> <span class="bullet-text">Sturdy laminate surfaces</span> </div>
                                                    <div class="d-flex align-items-center"> <span class="dot"></span> <span class="bullet-text">Relocation friendly design</span> </div>
                                                    <div class="d-flex align-items-center"> <span class="dot"></span> <span class="bullet-text">High gloss, high style</span> </div>
                                                    <div class="d-flex align-items-center"> <span class="dot"></span> <span class="bullet-text">Easy-access hydraulic storage</span> </div>
                                                </div>
                                            </div>
                                            <div class="mt-2"> <span class="font-weight-bold">Store</span> </div>
                                            <div class="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/N2fYgvD.png" class="rounded-circle store-image"/>
                                                <div class="d-flex flex-column ml-1 comment-profile">
                                                    <div class="comment-ratings"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div> <span class="username">Rare Boutique</span> <small class="followers">25K Followers</small>
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
