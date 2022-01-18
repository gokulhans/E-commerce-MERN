import React from 'react'
import { Link } from 'react-router-dom'
import './Billing.css'

function Billing() {
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
                                <div className="product border-bottom table-responsive">
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td width="20%"> <img src="https://i.imgur.com/u11K1qd.jpg" width="90" /> </td>
                                                <td width="60%"> <span className="font-weight-bold">Men's Sports cap</span>
                                                    <div className="product-qty"> <span className="d-block">Quantity:1</span> <span>Color:Dark</span> </div>
                                                </td>
                                                <td width="20%">
                                                    <div className="text-right"> <span className="font-weight-bold">$67.50</span> </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row d-flex justify-content-end">
                                    <div className="col-md-5">
                                        <table className="table table-borderless">
                                            <tbody className="totals">
                                                <tr className="border-top justify-content">
                                                    <td>
                                                        <div className="mt-2 text-left"> <span className="font-weight-bold">Subtotal</span> </div>
                                                    </td>
                                                    <td>
                                                        <div className="mt-2 text-right"> <span className="font-weight-bold text-success">$238.50</span> </div>
                                                    </td>
                                                    <td>
                                                        <button className=" btn btn-success"><Link to="/payment"><b>Pay</b></Link></button>
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
                <p className="font-weight-bold mb-0">Thanks for shopping with us Fasino Team </p>
            </div>
        </div>
    )
}

export default Billing
