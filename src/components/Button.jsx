import React, { Fragment, useState } from "react";
const ButtonProduct = props => {
  const [product, setProduct] = useState(props.Products);
  // console.log('este es el console.log del product' + product)
  // let meal = Object.values(product[3])
  let meal = product.filter(function(e) {
    return e.food === "Café americano";
  });
  console.log("este es el console.log del meal" + meal);

  const addToOrder = food => {
    setProduct([...product, food]);
  };
 
  return (
    <Fragment>
      <ul>
        {product.map((e, key) => (
          <button key={key} onClick={addToOrder}>
            {e.food} {e.price}
          </button>
        ))}
      </ul>
      <p></p>
    </Fragment>
  );
};

export default ButtonProduct;
