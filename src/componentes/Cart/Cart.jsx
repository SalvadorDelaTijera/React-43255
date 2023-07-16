import { useContext } from "react"
import { CarContext } from "../../contexx/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarContext);

    if(cantidadTotal === 0){
        return(
          <>
              <h3>Carrito Vacio</h3>
              <Link to="/">Continuar Comprando</Link>
          </>
            )
    }
  return (
    <div>
      {carrito.map(producto => <CartItem key={producto.id}{...producto}/>)}
      <h4>Total: $ {total}</h4>
      <h4>Cantidad Total :  {cantidadTotal} </h4>
      <button onClick={()=> vaciarCarrito()}> Vaciar Carrito</button>
      <Link to="/checkout">Finalizar Compra</Link>  
    </div>
  )
}

export default Cart