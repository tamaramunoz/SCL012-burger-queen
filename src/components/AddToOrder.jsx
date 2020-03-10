import React, { Fragment, useState } from 'react';


const  AddToOrder= (props) => {


  const [product, setProduct] = useState(props.Products);
  console.log(product)

  const addToOrder = (food) => {
    console.log(food)
    setProduct([
      ...product,
      food
    ])
  }
    return ( 
        <Fragment>

        <ul>
          {
            product.map(e => 
              <button key={e.id} onClick={addToOrder()}>
                 {e.food} {e.price}
              </button>
            )
          }
        </ul>
        </Fragment>
    );
}
 
export default AddToOrder;



