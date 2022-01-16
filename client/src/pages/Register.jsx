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
                    navigate('/product')
                }
            })
    }

    return (
        <>
            <div className="main">
                <h3>This is Register Page </h3>
                <div className="register-body">
                    <input type="text" value={name} name='name' onChange={(e) => { setName(e.target.value) }} />
                    <input type="text" value={email} name='email' onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="text" value={pswd} name='pswd' onChange={(e) => { setPswd(e.target.value) }} />
                    <select name='type' value={type} onChange={(e) => { setType(e.target.value) }} >
                        <option value="user">User</option>
                        <option value="company"> Company</option>
                    </select>
                    <input type="submit" value="Sign UP" onClick={() => PostData()} />
                </div>
            </div>
        </>
    )

}




export default Register