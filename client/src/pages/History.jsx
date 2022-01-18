import React from 'react'
import './History.css'

function History() {
    return (
        <div>
            <div className="wrapper rounded">
    <nav className="navbar navbar-expand-lg navbar-dark dark d-lg-flex align-items-lg-start"> <a className="navbar-brand" href="#">Transactions <p className="text-muted pl-1">Welcome to your transactions</p> </a> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-lg-auto">
                <li className="nav-item"> <a className="nav-link" href="#"><span className="fa fa-bell-o font-weight-bold"></span> <span className="notify">Notifications</span> </a> </li>
                <li className="nav-item "> <a href="#"><span className="fa fa-search"></span></a> <input type="search" className="dark" placeholder="Search"/> </li>
            </ul>
        </div>
    </nav>
    <div className="row mt-2 pt-2">
        <div className="col-md-6" id="income">
            <div className="d-flex justify-content-start align-items-center">
                <p className="fa fa-long-arrow-down"></p>
                <p className="text mx-3">Income</p>
                <p className="text-white ml-4 money">$9,758.23</p>
            </div>
        </div>
        <div className="col-md-6">
            <div className="d-flex justify-content-md-end align-items-center">
                <div className="fa fa-long-arrow-up"></div>
                <div className="text mx-3">Expense</div>
                <div className="text-white ml-4 money">$961.23</div>
            </div>
        </div>
    </div>
    <div className="d-flex justify-content-between align-items-center mt-3">
        <ul className="nav nav-tabs w-75">
            <li className="nav-item"> <a className="nav-link active" href="#history">History</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#">Reports</a> </li>
        </ul> <button className="btn btn-primary">New Transaction</button>
    </div>
    <div className="table-responsive mt-3">
        <table className="table table-dark table-borderless">
            <thead>
                <tr>
                    <th scope="col">Activity</th>
                    <th scope="col">Mode</th>
                    <th scope="col">Date</th>
                    <th scope="col" className="text-right">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row"> <span className="fa fa-briefcase mr-1"></span> Coorg Trip </td>
                    <td><span className="fa fa-cc-mastercard"></span></td>
                    <td className="text-muted">12 Jul 2020, 12:30 PM</td>
                    <td className="d-flex justify-content-end align-items-center"> <span className="fa fa-long-arrow-up mr-1"></span> $52.9 </td>
                </tr>
                <tr>
                    <td scope="row"> <span className="fa fa-bed mr-1"></span> Hotel Leela Palace </td>
                    <td><span className="fa fa-cc-mastercard"></span></td>
                    <td className="text-muted">11 Jul 2020, 2:00 PM</td>
                    <td className="d-flex justify-content-end align-items-center"> <span className="fa fa-long-arrow-up mr-1"></span> $18.9 </td>
                </tr>
                <tr>
                    <td scope="row"> <span className="fa fa-exchange mr-1"></span> Monthly Salary </td>
                    <td><span className="fa fa-cc-visa"></span></td>
                    <td className="text-muted">10 Jul 2020, 8:30 PM</td>
                    <td className="d-flex justify-content-end align-items-center"> <span className="fa fa-long-arrow-down mr-1"></span> $9,765.00 </td>
                </tr>
                <tr>
                    <td scope="row"> <span className="fa fa-exchange mr-1"></span> Xbox Purchase </td>
                    <td><span className="fa fa-cc-mastercard"></span></td>
                    <td className="text-muted">12 May 2020, 4:30 PM</td>
                    <td className="d-flex justify-content-end align-items-center"> <span className="fa fa-long-arrow-up mr-1"></span> $198.90 </td>
                </tr>
                <tr>
                    <td scope="row"> <span className="fa fa-cutlery mr-1"></span> Dinner Party </td>
                    <td><span className="fa fa-cc-visa"></span></td>
                    <td className="text-muted">11 May 2020, 5:30 PM</td>
                    <td className="d-flex justify-content-end align-items-center"> <span className="fa fa-long-arrow-up mr-1"></span> $12.90 </td>
                </tr>
                <tr>
                    <td scope="row"> <span className="fa fa-briefcase mr-1"></span> Nandini Hills Ride </td>
                    <td><span className="fa fa-cc-mastercard"></span></td>
                    <td className="text-muted">10 May 2020, 01:30 PM</td>
                    <td className="d-flex justify-content-end align-items-center"> <span className="fa fa-long-arrow-up mr-1"></span> $97.9 </td>
                </tr>
                <tr>
                    <td scope="row"> <span className="fa fa-briefcase mr-1"></span> Goa Beach Party </td>
                    <td><span className="fa fa-cc-visa"></span></td>
                    <td className="text-muted">09 May 2020, 01:30 PM</td>
                    <td className="d-flex justify-content-end align-items-center"> <span className="fa fa-long-arrow-up mr-1"></span> $97.9 </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div className="d-flex justify-content-between align-items-center results"> <span className="pl-md-3">Showing<b className="text-white"> 1-7 0f 200 </b> trasactions</span>
        <div className="pt-3">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item disabled"> <a className="page-link" href="#" aria-label="Previous"> <span aria-hidden="true">&lt;</span> </a> </li>
                    <li className="page-item"> <a className="page-link" href="#" aria-label="Next"> <span aria-hidden="true">&gt;</span> </a> </li>
                </ul>
            </nav>
        </div>
    </div>
</div>
        </div>
    )
}

export default History
