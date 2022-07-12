import './App.css';

import React from 'react';
import './App.css';
import ItemDetailContainer from './Components/Containers/ItemDetailContainer/ItemDetailContainer';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/Containers/ItemListContainer/ItemListContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    
<>

    <NavBar />


<ItemListContainer/>
<ItemDetailContainer/>
    </>

  );
}

export default App;