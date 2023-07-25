import React from "react";
import { useState } from "react"

// va almacenar el valor del contador o el número de ariculos que el usuario seleccionara
const ItemCount = ({inicial, stock, funcAgregar}) => {
    const[contador, setContador] = useState(inicial);

    //Funcones para eventos sumar 
    const incrementar = ()=>{
           
                setContador(contador + 1);
    }   

    //restar contador
    const decrementar=()=>{
        setContador(contador - 1);
      
    }


return (
    <>
        <div>
            <button onClick={incrementar}> + </button>
            <h6>{contador}</h6>
            <button onClick={decrementar}> - </button>
        </div>
        <button onClick={()=> funcAgregar(contador)} >Agregar al carrito</button>
    </>
)
}

export default ItemCount