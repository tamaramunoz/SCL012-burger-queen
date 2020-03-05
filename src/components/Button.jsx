import React, { Fragment } from 'react'

const ButtonProduct = (props) => {

    return ( 
        <Fragment>
            <ul>
                {
                    props.product.map(e => 
                    <button key={e.id} onClick={addToOrder}>
                        {e.food} {e.price}
                    </button>
                    )
                }
            </ul>
        </Fragment>
     );
}
 
export default ButtonProduct;