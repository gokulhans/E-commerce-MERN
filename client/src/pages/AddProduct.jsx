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
            navigate('/')
        })
    }



    return (
        <div>
          

  <div class="form-outline mb-4">
    <input type="text" id="form5Example1" class="form-control" onChange={(e)=>setitem(e.target.value)}  />
    <label class="form-label" for="form5Example1">Item</label>
  </div>
  <div class="form-outline mb-4">
    <input type="text" id="form5Example2" class="form-control" onChange={(e)=>setdes(e.target.value)} />
    <label class="form-label" for="form5Example2">Description</label>
  </div>
  <div class="form-outline mb-4">
    <input type="text" id="form5Example2" class="form-control" onChange={(e)=>setprice(e.target.value)} />
    <label class="form-label" for="form5Example2">Description</label>
  </div>

  <div class="form-check d-flex justify-content-center mb-4">
    <input class="form-check-input me-2" type="checkbox" value="" id="form5Example3" checked />
    <label class="form-check-label" for="form5Example3">
      I have read and agree to the terms
    </label>
  </div>

  <button type="submit" class="btn btn-primary btn-block mb-4" onClick={()=>PostData()} >Add Item</button>

        </div>
    )
}

export default AddProduct
