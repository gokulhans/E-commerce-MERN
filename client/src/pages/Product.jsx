import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';


const Product = (props) => {

    let products = props.data

    return (
        <div>
            {
                products.map((product, index) => (
                    
                    <MDBCard style={{ maxWidth: '22rem' }} key={index} >
                        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp' position='top' alt='Fissure in Sandstone' />
                        <MDBCardBody>
                            <MDBCardTitle> {product.item} </MDBCardTitle>
                            <MDBCardText>
                                {product.des}
                            </MDBCardText>
                            <li>   {product.type}  </li>
                            <li>   {product.price}  </li>
                            <MDBBtn href='/cart/add-to-cart/'>Add to Cart</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>

                ))}



            <h3>This is Product Page</h3>
        </div>
    )
}

export default Product