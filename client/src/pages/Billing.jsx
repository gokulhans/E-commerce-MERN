import React from 'react'
import { Link } from 'react-router-dom'
import './Billing.css'

function Billing() {
    return (
        <div>
            <div class="container mt-5 mb-5">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-8">
                        <div class=" g">
                            {/* <div class="text-left logo p-2 px-5"> <img src="https://i.imgur.com/2zDU056.png" width="50" /> </div> */}
                            <div class="invoice p-5">
                                <h5>Your order Confirmed!</h5> <span class="font-weight-bold d-block mt-4">Hello, Chris</span> <span>You order has been confirmed and will be shipped in next two days!</span>
                                <div class="payment border-top mt-3 border-bottom table-responsive">
                                    <table class="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="py-2"> <span class="d-block text-muted">Order Date</span> <span>12 Jan,2018</span> </div>
                                                </td>
                                                <td>
                                                    <div class="py-2"> <span class="d-block text-muted">Order No</span> <span>MT12332345</span> </div>
                                                </td>
                                                
                                                <td>
                                                    <div class="py-2"> <span class="d-block text-muted">Shiping Address</span> <span>414 Advert Avenue, NY,USA</span> </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="product border-bottom table-responsive">
                                    <table class="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td width="20%"> <img src="https://i.imgur.com/u11K1qd.jpg" width="90" /> </td>
                                                <td width="60%"> <span class="font-weight-bold">Men's Sports cap</span>
                                                    <div class="product-qty"> <span class="d-block">Quantity:1</span> <span>Color:Dark</span> </div>
                                                </td>
                                                <td width="20%">
                                                    <div class="text-right"> <span class="font-weight-bold">$67.50</span> </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="row d-flex justify-content-end">
                                    <div class="col-md-5">
                                        <table class="table table-borderless">
                                            <tbody class="totals">
                                                <tr class="border-top justify-content">
                                                    <td>
                                                        <div class="mt-2 text-left"> <span class="font-weight-bold">Subtotal</span> </div>
                                                    </td>
                                                    <td>
                                                        <div class="mt-2 text-right"> <span class="font-weight-bold text-success">$238.50</span> </div>
                                                    </td>
                                                    <td>
                                                        <button class=" btn btn-success"><Link to="/payment"><b>Pay</b></Link></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <p class="font-weight-bold mb-0">Thanks for shopping with us Fasino Team </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billing
