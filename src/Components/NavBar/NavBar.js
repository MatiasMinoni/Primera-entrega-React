import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
 import 'materialize-css/dist/css/materialize.min.css';
 import { Link , NavLink } from 'react-router-dom';
// import "./src/App.css";
// // importar iconos de google

 
const Categorias = [
  { nombre: 'Tecnología', id: 0, ruta: "Tienda/Tecnologia" },
  { nombre: 'Indumentaria', id: 1, ruta: "Tienda/Indumentaria" },
  { nombre: 'Joyas', id: 2, ruta: "Tienda/Joyas" }
]

    const NavBar = () => {
 
      return (
  
 <nav>
   <div className="nav-wrapper">
     <NavLink to="/" className="brand-logo left">MicroStore</NavLink>
     <ul id="nav-mobile" className="right hide-on-med-and-down">
       <li><NavLink to="Acerca_de">Acerca de</NavLink></li>
       <li><NavLink to="Contacto">Contacto</NavLink></li>
       {Categorias.map((Categorias) =><li> <NavLink key={Categorias.id} to={Categorias.ruta}>{Categorias.nombre} </NavLink></li>)}
      <li ><NavLink className='carrito_icon ' title='Carrito' to="Carrito" alt='Carrito'><h3><CartWidget /></h3> </NavLink></li>
    
  
  </ul>
        
    
     
      </div>
   
 </nav>
      
  
  );
}

  export default NavBar;

