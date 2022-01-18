import React from 'react'
import { Link } from 'react-router-dom'
import './Billing.css'

function Billing() {
    return (
        <div>
            <div class="container mt-5 mb-5">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-8">
                        <table class="table table-borderless">
                            <tbody>
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
    )
}

export default Billing
