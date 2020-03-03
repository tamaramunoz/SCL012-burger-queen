import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Products from './components/Products.json';
import UserTable from './components/UserTable';
import AddProductForm from './components/AddProductForm';

function App() {

  const [product, setProduct] = useState(Products);
  console.log(useState(Products))

  const addToOrder = (food) => {
    food.id = Products.id
    setProduct([
      ...product,
      food
    ])
  }

  const foodData = [
    {id: uuidv4(), food: 'Café americano', price: 500},
    {id: uuidv4(), food: 'Café con leche', price: 700},
    {id: uuidv4(), food: 'Sandwich de jamón y queso', price: 1000},
    {id: uuidv4(), food: 'Jugo de frutas natural', price: 700},
  ]

  // state
  const [foodList, setFoodList] = useState(foodData)

  // agrega usuarios
  const addFood = (food) => {
    food.id = uuidv4()
    setFoodList([
      ...foodList,
      food
    ])
  }

  // elimina producto
  const deleteProduct = (id) => {
    const arrayFiltrado = foodList.filter(food => food.id !== id);
    setFoodList(arrayFiltrado);
  }

  // const updateOrder = (id, updatedOrder) => {
  //   setEditing(false)
  //   setFoodList(foodList.map(e => (e.id === id ? updatedOrder : e)))
  // }

  return (
    <div className="container">
      <h1>Burger Queen</h1>
      <div className="flex-row">
        <div className="flex-large">
        <ul>
          {
            product.map(e => 
              <p key={e.id}>
                 {e.food} {e.price}
              </p>
            )
          }
        </ul>
          {
            (
              <div>
                <h2>Add Product</h2>
                <AddProductForm 
                  addFood={addFood}
                  addToOrder={addToOrder}
                />
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>View Order</h2>
          <UserTable 
            foodList={foodList} 
            deleteProduct={deleteProduct} 
          />
          {/* <ProductList/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
