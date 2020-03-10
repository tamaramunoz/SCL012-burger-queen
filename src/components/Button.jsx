import React, { Fragment, useState } from 'react'
// import { useForm } from 'react-hook-form'
// import AddProductForm from './AddProductForm';


const ButtonProduct = (props) => {

    const [product, setProduct] = useState(props.Products);
    console.log(product[0].food)
  
    const addToOrder = (props) => {
      console.log(props)
      setProduct([
        ...product,
        props
      ])
    }
    

    return ( 
        <Fragment>
            <ul >
                {
                    product.map((e, key) => 
                    // <button key={key} onClick={addToOrder}>
                     <button key={key} onClick={addToOrder}>
                        {e.food} {e.price}
                    </button>
                    )
                }
            </ul>
        </Fragment>
     );
}
 
export default ButtonProduct;