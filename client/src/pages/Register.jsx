import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pswd, setPswd] = useState('')
    const [type, setType] = useState('')

    const navigate = useNavigate()
    const PostData = () => {
        fetch("users/signup", {
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
                <h3>Register</h3>

                <section className="vh-100">
                    <div className="container-fluid h-custom">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-9 col-lg-6 col-xl-5">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid"
                                    alt="Sample image" />
                            </div>
                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <form>


                                    <div className="form mb-4">
                                        <label >Company Name</label>
                                        <input type="name" className="form-control form-control-lg"
                                            placeholder="Enter company name" value={name} name='name' onChange={(e) => { setName(e.target.value) }} />
                                    </div>

                                    <div className="form mb-4">
                                        <label >Email address</label>
                                        <input type="email" className="form-control form-control-lg"
                                            placeholder="Enter a valid email address" value={email} name='email' onChange={(e) => { setEmail(e.target.value) }} />
                                    </div>

                                    <div className="form mb-3">
                                        <label >Password</label>
                                        <input type="password" className="form-control form-control-lg"
                                            placeholder="Enter password" value={pswd} name='pswd' onChange={(e) => { setPswd(e.target.value) }} />
                                    </div>
                         
                                    <select className="form-select mb-2" aria-label="Default select example" name='type' value={type} onChange={(e) => { setType(e.target.value) }}>
                                        <option selected value="user">User</option>
                                        <option value="company"> Company</option>
                                    </select>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="form-check mb-0">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                            <label className="form-check-label" for="form2Example3">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>

                                    <div className="text-center text-lg-start mt-2 pt-2">
                                        <button type="button" className="btn btn-primary btn-lg" onClick={() => PostData()} >Register</button>
                                        <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a href='/login'
                                            className="link-danger"  >Login</a></p>
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




export default Register