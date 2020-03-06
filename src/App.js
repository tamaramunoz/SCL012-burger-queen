
import React from 'react';
import './App.css';
import LunchMenu from './lunchMenu'
import React, { useState } from 'react';
import Home from './components/Home.jsx';
import { v4 as uuidv4 } from 'uuid';
import Products from './components/Products.json';
import UserTable from './components/UserTable';
import AddProductForm from './components/AddProductForm';
import ButtonProduct from './components/Button'



function App() {

  const foodData = [
    {id: uuidv4(), food: 'Café americano', price: 500},
    {id: uuidv4(), food: 'Café con leche', price: 700},
    {id: uuidv4(), food: 'Sandwich de jamón y queso', price: 1000},
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
      <div>
      <header className="App-header">
        <LunchMenu/>
      </header>

    <div className="container">
      <Home/>
      <h1>Burger Queen</h1>
      <div className="flex-row">
        <div className="flex-large">
        {
            (
              <div>
                <h3>Add Costumer</h3>
                <AddProductForm 
                  addFood={addFood}
                />
              </div>
            )
          }
        <div>
          <ButtonProduct
            Products={Products}
          />
        </div>
          
        </div>
        <div className="flex-large">
          <h2>View Order</h2>
          <UserTable 
            foodList={foodList} 
            deleteProduct={deleteProduct} 
          />
        </div>
      </div>

    </div>
  );
}

export default App;
