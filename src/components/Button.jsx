import React, { Fragment, useState } from 'react'


const ButtonProduct = (props) => {

    const [product, setProduct] = useState(props.Products);
    console.log(product[1].food)
  
    const addToOrder = (food) => {
      console.log(food)
      setProduct([
        ...product,
        food
      ])
    }

    return ( 
        <Fragment>
            <ul >
                {
                    product.map((e, key) => 
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