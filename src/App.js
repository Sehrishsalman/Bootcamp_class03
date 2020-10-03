import React from 'react';
import './App.css';
import Bakery from './bakery.js';

function App() {
  return (
    <div className="App">
   <Bakery DishName="Chicken Pie" sweet="Tarts"/><hr/>
   <Bakery DishName="Stuffed Buns" sweet="Brownies"/><hr/>
   <Bakery DishName="Pizza" sweet="Sweet Rolls"/>
   </div>
  );
}

export default App;
