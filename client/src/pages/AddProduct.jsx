import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const AddProduct = () => {

    const navigate = useNavigate()


    const [item, setitem] = useState('');
    const [price, setprice] = useState('');
    const [type, settype] = useState('');
    const [des, setdes] = useState('');


    const PostData = () => {
        console.log('çlicked');
        fetch("products/add-product", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                type,
                item, price, des
            })
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                navigate('/')
            })
    }



    return (
        // <div>
        //     <input type="text" placeholder='item' onChange={(e)=>setitem(e.target.value)} />
        //     <input type="text" placeholder='type' onChange={(e)=>settype(e.target.value)} />
        //     <input type="text" placeholder='description' onChange={(e)=>setdes(e.target.value)} />
        //     <input type="text" placeholder='price' onChange={(e)=>setprice(e.target.value)} />
        //     <input type="button" value="Add Product" onClick={()=>PostData()} />
        // </div>
<div className="main">
            
        <form className="addproduct">
            <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" id="email" />
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd" />
            </div>
            <div class="checkbox">
                <label><input type="checkbox" /> Remember me</label>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
</div>
    )
}

export default AddProduct
