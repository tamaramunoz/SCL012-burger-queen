import React, { Fragment, useState } from 'react'


const ButtonProduct = (props) => {

    const [product, setProduct] = useState(props.Products);
    // console.log('este es el console.log del product' + product)

    // let meal = Object.values(product[3])

    let meal = product.filter(function(e) {
        return e.food === 'Café americano';
    })
    console.log('este es el console.log del meal' + meal)
  

    return ( 
        <Fragment>
            <ul >
                {
                    product.map((e, key) =>
                    <button key={key} onClick={console.log(e.food)}>
                        {e.food} {e.price}
                    </button>
                    )
                }
            </ul>
            <p ></p>
        </Fragment>
     );
}
 
export default ButtonProduct;