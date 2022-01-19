import React from 'react'
import { Link } from 'react-router-dom'
import './Billing.css'

function Billing() {


    let product = JSON.parse(localStorage.getItem("cartproducts"))
    console.log(product);
    let price = 0;

    product.forEach(element => {
        console.log(element);

        price = price + parseInt(element.product.price)
    });

    console.log(price);
    localStorage.setItem("price", JSON.stringify(price))
    return (
        <div>


            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <div className=" g">
                            {/* <div className="text-left logo p-2 px-5"> <img src="https://i.imgur.com/2zDU056.png" width="50" /> </div> */}
                            <div className="invoice p-5">
                                <h5>Your order Confirmed!</h5> <span className="font-weight-bold d-block mt-4">Hello, Chris</span> <span>You order has been confirmed and will be shipped in next two days!</span>
                                <div className="payment border-top mt-3 border-bottom table-responsive">
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="py-2"> <span className="d-block text-muted">Order Date</span> <span>12 Jan,2018</span> </div>
                                                </td>
                                                <td>
                                                    <div className="py-2"> <span className="d-block text-muted">Order No</span> <span>MT12332345</span> </div>
                                                </td>

                                                <td>
                                                    <div className="py-2"> <span className="d-block text-muted">Shiping Address</span> <span>414 Advert Avenue, NY,USA</span> </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {
                                    product.map((product, index) => (
                                        <div className="product border-bottom table-responsive">
                                            <table className="table table-borderless">
                                                <tbody>
                                                    <tr>
                                                        <td width="20%"> <img src="https://i.imgur.com/u11K1qd.jpg" width="90" /> </td>
                                                        <td width="60%"> <span className="font-weight-bold">{product.product.item} </span>
                                                            <div className="product-qty"> <span className="d-block">Quantity:1</span> <span>Color:Dark</span> </div>
                                                        </td>
                                                        <td width="20%">
                                                            <div className="text-right"> <span className="font-weight-bold">$ {product.product.price}</span> </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    ))}

                                <div className="row d-flex justify-content-end">
                                    <div className="col-md-5">
                                        <table className="table table-borderless">
                                            <tbody className="totals">
                                                <tr className="border-top justify-content">
                                                    <td>
                                                        <div className="mt-2 text-left"> <span className="font-weight-bold">Subtotal</span> </div>
                                                    </td>
                                                    <td>
                                                        <div className="mt-2 text-right"> <span className="font-weight-bold text-success">$ {price}</span> </div>
                                                    </td>
                                                    <td>
                                                        <Link className=" btn btn-success" to="/payment"><b>Pay</b></Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <p className="font-weight-bold mb-0">Thanks for shopping with us Fasino Team </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Billing
