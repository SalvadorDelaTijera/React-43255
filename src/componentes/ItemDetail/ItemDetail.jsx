import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { CarContext } from '../../contexx/CarritoContext'

const ItemDetail =({ id, nombre, precio, img, stock }) => {

  // cantidad de productos agregados
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarProducto} = useContext(CarContext);

  // funcion handler de cantidad
  const handlerCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)

    const item = ({id, nombre, precio});
    agregarProducto(item, cantidad);
  }

  return (
    <div className="Detalle">
      <h3>{nombre}</h3>
      <h4>Precio: {precio}</h4>
      <h5>ID: {id}</h5>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil impedit accusantium sed vitae, nisi officia dolorum obcaecati beatae debitis animi.</p>
      <img src={img} alt={nombre} />
      {
        //MONTAJE Y DESMONATJE DE COMPONENTE//
      }
      {agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcAgregar={handlerCantidad} />)}
    </div>
  )
}

export default ItemDetail