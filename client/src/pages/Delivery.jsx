import React from 'react'

function Delivery() {
  return (
    <div>
      <div className="row">
        <div className="col-md-8 mb-4">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Biling details</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input type="text" id="form7Example1" className="form-control" />
                      <label className="form-label" for="form7Example1">First name</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input type="text" id="form7Example2" className="form-control" />
                      <label className="form-label" for="form7Example2">Last name</label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form7Example3" className="form-control" />
                  <label className="form-label" for="form7Example3">Company name</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form7Example4" className="form-control" />
                  <label className="form-label" for="form7Example4">Address</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="form7Example5" className="form-control" />
                  <label className="form-label" for="form7Example5">Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="number" id="form7Example6" className="form-control" />
                  <label className="form-label" for="form7Example6">Phone</label>
                </div>

                <div className="form-outline mb-4">
                  <textarea className="form-control" id="form7Example7" rows="4"></textarea>
                  <label className="form-label" for="form7Example7">Additional information</label>
                </div>

                <div className="form-check d-flex justify-content-center mb-2">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form7Example8"
                    checked />
                  <label className="form-check-label" for="form7Example8">
                    Create an account?
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Summary</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li
                  className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>$53.98</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>Gratis</span>
                </li>
                <li
                  className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">including VAT</p>
                    </strong>
                  </div>
                  <span><strong>$53.98</strong></span>
                </li>
              </ul>

              <button type="button" className="btn btn-primary btn-lg btn-block">
                Make purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delivery
