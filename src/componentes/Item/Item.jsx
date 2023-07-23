import './item.css'
import { Link } from 'react-router-dom'

const Item = ({nombre, marca, idCategoria, tipo, precio, id, img, stock}) => {
  return (
    <div className='cardPerfumes'>
      <img className='imgPerfume' src={img} alt={nombre}/>
        <div className='infoPerfume'>
          <h3 id ='tituloNombre'>{nombre}</h3>
          <p>{marca}</p>
          <h4>{idCategoria}</h4>
          <h3> ${precio}</h3>
          <p>Id {id}</p>
          <p>Stock: {stock}</p>
          <button className='button'>
          <Link className="link"to={`/item/${id}`}>Ver Detalle</Link>
          </button>
        </div>
          
         
    </div>
  )
}
export default Item