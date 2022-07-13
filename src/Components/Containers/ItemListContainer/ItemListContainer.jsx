import React, { useState, useEffect } from "react";
import Itemlista from "./ItemList";

import { useParams } from "react-router-dom";


export const ItemListContainer = ({ greeting }) => {


  const { categoryId } = useParams();

  const [loaded, setLoaded] = useState(true)
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState (false);



useEffect(()=>{
  const URL = categoryId
  ? `https://fakestoreapi.com/products/category/${categoryId}`
  : "https://fakestoreapi.com/products/";
 
fetch(URL)
.then(res => res.json())
.then(data => setProductos(data))
.catch(err => console.log(err))
.finally(() => setLoaded(false))
  
}, [categoryId]);
   
    return (
        <>
     
     {loaded ? <p>Cargando...</p>  : <Itemlista productos={productos}/>}
       
      
        </>
    )
}

export default ItemListContainer

