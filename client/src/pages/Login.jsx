import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Login.css'

const Login = () => {
    
    var err

    const [email,setEmail] = useState('')
    const [pswd,setPswd] = useState('')
    const navigate = useNavigate()
    const PostData = ()=>{ 
        fetch("users/login",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email,
                pswd:pswd
            })
        }).then(response=>response.json())
        .then(data=>{
            console.log(data);
            if (!data.status) {
                console.log('login failed');
            }else{
                navigate('/product')
            }
        })
    }

    return (

        <div className="main">
           <h3>This is Login Page </h3>
            <div className="login-body">
                {err}
                <label htmlFor="email">Email</label>
           <input type="text" value={email} name='email' onChange={(e)=>{setEmail(e.target.value)}} />
                <label htmlFor="pswd">Password</label>
           <input type="text" value={pswd} name='pswd' onChange={(e)=>{setPswd(e.target.value)}} />
            <input type="submit" value="Sign IN" onClick={()=>PostData()} />
        </div>
        </div>

    )
}

export default Login