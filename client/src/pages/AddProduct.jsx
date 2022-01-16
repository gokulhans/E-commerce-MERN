import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AddProduct.css'

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
        <>
            <div className="main">
                <div className="addproduct">
                    <h3>Add Product</h3>
                    <div>

                        <div class="form mb-2 mt-2">
                            <label for="form5Example1">Product Name</label>
                            <input type="text" id="form5Example1" class="form-control" onChange={(e) => setitem(e.target.value)} />
                        </div>
                        <div class="form mb-2">
                            <label for="form5Example2">Description</label>
                            <input type="text" id="form5Example2" class="form-control" onChange={(e) => setdes(e.target.value)} />
                        </div>
                        <div class="form mb-2">
                            <label for="form5Example2">Description</label>
                            <input type="text" id="form5Example2" class="form-control" onChange={(e) => setprice(e.target.value)} />
                        </div>
                        <div class="form d-flex justify-content-center mb-4">
                            <label class="form-label">
                                click add button to add products in your e-shope
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block mb-4" onClick={() => PostData()} >Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct
