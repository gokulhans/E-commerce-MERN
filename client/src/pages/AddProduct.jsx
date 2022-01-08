import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'


const AddProduct = () => {

    const navigate = useNavigate()

   
    const [item, setitem] = useState('');
    const [price, setprice] = useState('');
    const [type, settype] = useState('');
    const [des, setdes] = useState('');


    const PostData = ()=>{ 
        console.log('çlicked');
        fetch("products/add-product",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                type,
                item,price,des
            })
        }).then(response=>response.json())
        .then(data=>{
            console.log(data);
            navigate('/product')
        })
    }



    return (
        <div>
            <input type="text" placeholder='item' onChange={(e)=>setitem(e.target.value)} />
            <input type="text" placeholder='type' onChange={(e)=>settype(e.target.value)} />
            <input type="text" placeholder='description' onChange={(e)=>setdes(e.target.value)} />
            <input type="text" placeholder='price' onChange={(e)=>setprice(e.target.value)} />
            <input type="button" value="Add Product" onClick={()=>PostData()} />
        </div>
    )
}

export default AddProduct
