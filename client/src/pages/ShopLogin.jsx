import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const ShopLogin = () => {

    var err

    const [email, setEmail] = useState('')
    const [pswd, setPswd] = useState('')
    const navigate = useNavigate()
    const PostData = () => {
        console.log('clicked the hell');
        console.log(pswd,email);
        fetch("users/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                pswd: pswd
            })
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                if (!data.status) {
                    console.log('login failed');
                } else {
                    navigate('/')
                }
            })
    }

    return (

        <div className="main container">
            <h2 className="mt-3">Login to your Shop</h2>
            

            <section class="vh-100">
                <div class="container-fluid h-custom">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid"
                                alt="Sample image" />
                        </div>
                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                            {err}

                                <div class="form mb-4">
                                    <label >Email address</label>
                                    <input type="email" class="form-control form-control-lg"
                                        placeholder="Enter a valid email address" value={email} name='email' onChange={(e) => { setEmail(e.target.value) }} />
                                </div>

                                <div class="form mb-3">
                                    <label >Password</label>
                                    <input type="password" class="form-control form-control-lg"
                                        placeholder="Enter password" value={pswd} name='pswd' onChange={(e) => { setPswd(e.target.value) }}  />
                                </div>

                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="form-check mb-0">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label class="form-check-label" for="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" class="text-body">Forgot password?</a>
                                </div>

                                <div class="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" class="btn btn-primary btn-lg" onClick={() => PostData()} >Login</button>
                                    <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href='/register'
                                        class="link-danger"  >Register</a></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default ShopLogin