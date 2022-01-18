import React from 'react'
import './Track.css'

function Track() {
    return (
        <div>
            <div className="container-fluid my-5 d-flex justify-content-center">
                <div className="card card-1">
                    <div className="card-header bg-white">
                        <div className="media flex-sm-row flex-column-reverse justify-content-between ">
                            <div className="col my-auto">
                                <h4 className="mb-0">Thanks for your Order,<span className="change-color">Anjali</span> </h4>
                            </div>
                            <div className="col-auto text-center my-auto pl-0 pt-sm-4"> <img className="img-fluid my-auto align-items-center mb-0 pt-3" src="https://i.imgur.com/7q7gIzR.png" width="115" height="115" />
                                <p className="mb-4 pt-0 Glasses">Glasses For Everyone</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row justify-content-between mb-3">
                            <div className="col-auto">
                                <h6 className="color-1 mb-0 change-color">Receipt</h6>
                            </div>
                            <div className="col-auto "> <small>Receipt Voucher 1KAU9-84UIL</small> </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card card-2">
                                    <div className="card-body">
                                        <div className="media">
                                            <div className="sq align-self-center "> <img className="img-fluid my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0" src="https://i.imgur.com/RJOW4BL.jpg" width="135" height="135" /> </div>
                                            <div className="media-body my-auto text-right">
                                                <div className="row my-auto flex-column flex-md-row">
                                                    <div className="col my-auto">
                                                        <h6 className="mb-0"> Jack Jacs</h6>
                                                    </div>
                                                    <div className="col-auto my-auto"> <small>Golden Rim </small></div>
                                                    <div className="col my-auto"> <small>Size  M</small></div>
                                                    <div className="col my-auto"> <small>Qty  1</small></div>
                                                    <div className="col my-auto">
                                                        <h6 className="mb-0">3,60000</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="my-3 " />
                                        <div className="row">
                                            <div className="col-md-3 mb-3"> <small> Track Order <span><i className=" ml-2 fa fa-refresh" aria-hidden="true"></i></span></small> </div>
                                            <div className="col mt-auto">
                                                <div className="progress my-auto">
                                                    <div className="progress-bar progress-bar rounded" style={{width: "18%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div className="media row justify-content-between ">
                                                    <div className="col-auto text-right"><span> <small className="text-right mr-sm-2"></small> <i className="fa fa-circle active"></i> </span></div>
                                                    <div className="flex-col"> <span> <small className="text-right mr-sm-2">Out for delivary</small><i className="fa fa-circle active"></i></span></div>
                                                    <div className="col-auto flex-col-auto"><small className="text-right mr-sm-2">Delivered</small><span> <i className="fa fa-circle"></i></span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <div className="card card-2">
                                    <div className="card-body">
                                        <div className="media">
                                            <div className="sq align-self-center "> <img className="img-fluid my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0" src="https://i.imgur.com/fUWWpRS.jpg" width="135" height="135" /> </div>
                                            <div className="media-body my-auto text-right">
                                                <div className="row my-auto flex-column flex-md-row">
                                                    <div className="col-auto my-auto ">
                                                        <h6 className="mb-0"> Michel Mark</h6>
                                                    </div>
                                                    <div className="col my-auto "> <small>Black Rim </small></div>
                                                    <div className="col my-auto "> <small>Size  L</small></div>
                                                    <div className="col my-auto "> <small>Qty  1</small></div>
                                                    <div className="col my-auto ">
                                                        <h6 className="mb-0">1,235.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="my-3 " />
                                        <div className="row ">
                                            <div className="col-md-3 mb-3"> <small> Track Order <span><i className=" ml-2 fa fa-refresh" aria-hidden="true"></i></span></small> </div>
                                            <div className="col mt-auto">
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar rounded"  role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div className="media row justify-content-between ">
                                                    <div className="col-auto text-right"><span> <small className="text-right mr-sm-2"></small> <i className="fa fa-circle active"></i> </span></div>
                                                    <div className="flex-col"> <span> <small className="text-right mr-sm-2">Out for delivary</small><i className="fa fa-circle"></i></span></div>
                                                    <div className="col-auto flex-col-auto">
                                                        <small className="text-right mr-sm-2">Delivered</small><span> <i className="fa fa-circle"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col">
                                <div className="row justify-content-between">
                                    <div className="col-auto">
                                        <p className="mb-1 text-dark"><b>Order Details</b></p>
                                    </div>
                                    <div className="flex-sm-col text-right col">
                                        <p className="mb-1"><b>Total</b></p>
                                    </div>
                                    <div className="flex-sm-col col-auto">
                                        <p className="mb-1">4,835</p>
                                    </div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="flex-sm-col text-right col">
                                        <p className="mb-1"> <b>Discount</b></p>
                                    </div>
                                    <div className="flex-sm-col col-auto">
                                        <p className="mb-1">150</p>
                                    </div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="flex-sm-col text-right col">
                                        <p className="mb-1"><b>GST 18%</b></p>
                                    </div>
                                    <div className="flex-sm-col col-auto">
                                        <p className="mb-1">843</p>
                                    </div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="flex-sm-col text-right col">
                                        <p className="mb-1"><b>Delivery Charges</b></p>
                                    </div>
                                    <div className="flex-sm-col col-auto">
                                        <p className="mb-1">Free</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row invoice ">
                            <div className="col">
                                <p className="mb-1"> Invoice Number : 788152</p>
                                <p className="mb-1">Invoice Date : 22 Dec,2019</p>
                                <p className="mb-1">Recepits Voucher:18KU-62IIK</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="jumbotron-fluid">
                            <div className="row justify-content-between ">
                                <div className="col-sm-auto col-auto my-auto"><img className="img-fluid my-auto align-self-center " src="https://i.imgur.com/7q7gIzR.png" width="115" height="115" /></div>
                                <div className="col-auto my-auto ">
                                    <h2 className="mb-0 font-weight-bold">TOTAL PAID</h2>
                                </div>
                                <div className="col-auto my-auto ml-auto">
                                    <h1 className="display-3 "> 5,528</h1>
                                </div>
                            </div>
                            <div className="row mb-3 mt-3 mt-md-0">
                                <div className="col-auto border-line"> <small className="text-white">PAN:AA02hDW7E</small></div>
                                <div className="col-auto border-line"> <small className="text-white">CIN:UMMC20PTC </small></div>
                                <div className="col-auto "><small className="text-white">GSTN:268FD07EXX </small> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Track
