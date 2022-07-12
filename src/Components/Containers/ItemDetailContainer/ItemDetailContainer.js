import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
 const [detail, setDetail] = useState([]);
 const [error, setError] = useState(false);
 const [loading, setLoading] = useState (true);
 const resultado = useParams();
 console.log(resultado);


 useEffect(() =>{
   const getDetail = async () =>{
   try {const response = await fetch('https://fakestoreapi.com/products');
     const data = await response.json();
     setDetail(data);}
     catch(err) {
       console.log(err);
       setError(true);
     }
     finally{
       setLoading(false);
     }
   }
   getDetail();
 },[]);

    return(
        <>{loading ? <p>Loading...</p> : error ? <p>Error...</p> : 'Todo bien'}
        <ItemDetail detail={detail} />
        </>
        
    )
}


export default ItemDetailContainer