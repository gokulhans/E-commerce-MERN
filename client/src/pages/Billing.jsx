import React from 'react'
import { Link } from 'react-router-dom'
import './Billing.css'

function Billing() {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <table className="table table-borderless">
                            <tbody>
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
    )
}

export default Billing
