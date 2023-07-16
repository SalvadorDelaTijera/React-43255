import { useContext } from "react";
import { CarContext } from "../../contexx/CarritoContext";

export const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarContext);

  return (
    <div>
        <h3>{item.nombre}</h3>
        <h5>Cantidad: {cantidad}</h5>
        <h4>Precio: $ {item.precio}</h4>
        <button onClick={()=> eliminarProducto(item.id)}>Eliminar</button>
        <hr />
    </div>
  )
}

export default CartItem