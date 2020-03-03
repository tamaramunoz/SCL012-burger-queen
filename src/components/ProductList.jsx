import React, { useState, Fragment } from "react";

const ProductList = () => {

    const [arrayNumero, setArrayNumero] = useState(['pan'])
    const [numero, setNumero] = useState(500)

    const agregarElemento = () => {
        setNumero(numero + 1)
        // console.log('click')
        setArrayNumero([
            ...arrayNumero,
            numero
        ])
    }

  return (
    <Fragment>
      <h2> ProductList </h2>
      <button onClick={agregarElemento}>Agregar</button>
      {
          arrayNumero.map((item, index) =>
          <p key={index}>{item} - {index}</p>
          )
      }
    </Fragment>
  );
};

export default ProductList;
