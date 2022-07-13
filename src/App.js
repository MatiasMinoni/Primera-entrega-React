import './App.css';

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";


import ItemDetailContainer from './Components/Containers/ItemDetailContainer/ItemDetailContainer';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/Containers/ItemListContainer/ItemListContainer';
import CartWidget from './Components/CartWidget/CartWidget';
import Cart from './Components/Cart/Cart';

const App = () => {
  return (
    
<>
<BrowserRouter>
    <NavBar />
<Routes>
<Route path='/' element={<ItemListContainer greeting="Bienvenido"  />}/>
<Route path='/category/:categoryId' element={<ItemListContainer />}/>
<Route path="/product/:productId" element={<ItemDetailContainer />} />
<Route path='/Carrito' element={<Cart/>}/>
</Routes>


</BrowserRouter>

    </>

  );
}

export default App;