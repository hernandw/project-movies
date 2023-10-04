import { useParams } from "react-router-dom";
import "./DetailCard.css";
import { useContext, useEffect, useState } from "react";
import { ContextMovie } from "../components/ContextMovie";
const DetailCard = () => {
    const { peliculas } = useContext(ContextMovie);
   const { id } = useParams();
    const producto = peliculas.filter((pelicula) => pelicula.id === parseInt(id))[0];
   

  console.log(producto);
  return (
    <div>
          <h1>Soy Detalle {id} </h1>
          <p>{producto.title}</p>
          
          
          
     
    </div>
  );
};

export default DetailCard;
