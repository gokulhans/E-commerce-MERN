import React from 'react'


const Product = ({data}) => {

    
    return (
        <div>
            {data.map((product,index) => (  
                <div key={index}>
          <li>   {product.item}  </li>  
          <li>   {product.type}  </li>  
          <li>   {product.des}  </li>  
          <li>   {product.price}  </li>  
          </div>
        ))}  
            <p>{data.name}</p>
           
           <h3>This is Product Page</h3>
        </div>
    )
}

export default Product