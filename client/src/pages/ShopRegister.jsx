import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

const ShopRegister = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pswd, setPswd] = useState('')
    const [type, setType] = useState('')

    const navigate = useNavigate()


    const PostData = () => {
        fetch("shop/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name, 
                email: email,
                pswd: pswd,
                type: type,
            })
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.signin) {
                    navigate('/')
                }
            })
    }

    return (
        <>
            <div className="main">
                <h3>Register Shop</h3>

                <section class="vh-100">
                    <div class="container-fluid h-custom">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-md-9 col-lg-6 col-xl-5">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid"
                                    alt="Sample image" />
                            </div>
                            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <form>


                                    <div class="form mb-4">
                                        <label >Company Name</label>
                                        <input type="name" class="form-control form-control-lg"
                                            placeholder="Enter company name" value={name} name='name' onChange={(e) => { setName(e.target.value) }} />
                                    </div>

                                    <div class="form mb-4">
                                        <label >Email address</label>
                                        <input type="email" class="form-control form-control-lg"
                                            placeholder="Enter a valid email address" value={email} name='email' onChange={(e) => { setEmail(e.target.value) }} />
                                    </div>

                                    <div class="form mb-3">
                                        <label >Password</label>
                                        <input type="password" class="form-control form-control-lg"
                                            placeholder="Enter password" value={pswd} name='pswd' onChange={(e) => { setPswd(e.target.value) }} />
                                    </div>

                                    <select disabled class="form-select mb-2" aria-label="Default select example" name='type' value={type} onChange={(e) => { setType(e.target.value) }}>
                                        <option value="company">Shop</option>
                                    </select>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="form-check mb-0">
                                            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                            <label class="form-check-label" for="form2Example3">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>

                                    <div class="text-center text-lg-start mt-2 pt-2">
                                        <button type="button" class="btn btn-primary btn-lg" onClick={() => PostData()} >Register</button>
                                        <p class="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a href='/shop-login'
                                            class="link-danger"  >Login</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </>
    )

}




export default ShopRegister