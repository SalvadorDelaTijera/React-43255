import { useState } from "react"

// va almacenar el valor del contador o el número de ariculos que el usuario seleccionara
const ItemCount = ({inicial, stock, funcAgregar}) => {
    const[contador, setContador] = useState(inicial);

    //Funcones para eventos sumar / restar contador
    const incrementar = ()=>{
            if (contador < stock){
                setContador(contador + 1);
            }
    }
    const decrementar=()=>{
        if (contador > inicial){
            setContador(contador - 1);
        }
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