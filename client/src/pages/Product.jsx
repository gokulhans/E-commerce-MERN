import React from 'react'
var dataa 
export const getData = (data)=>{
    console.log('dvfhsvhf dvfhsvh dshvsdvhjs');
    dataa = data
}
const Product = () => {
  
    return (
        <div>
            <h1>{dataa.user.email}</h1>
           <h3>This is Product Page</h3>
        </div>
    )
}

export default Product