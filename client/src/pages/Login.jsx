import React, { useState } from 'react'

const Login = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [pswd,setPswd] = useState('')

    return (
        <div>
           <h3>This is Login Page </h3>
           <input type="text" value={name} name='name' onChange={(e)=>{setName(e.target.value)}} />
           <input type="text" value={email} name='email' onChange={(e)=>{setEmail(e.target.value)}} />
           <input type="text" value={pswd} name='pswd' onChange={(e)=>{setPswd(e.target.value)}} />
            <input type="submit" value="Sign UP" />
        </div>
    )
}

export default Login