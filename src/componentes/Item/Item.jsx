import { Link } from 'react-router-dom'
import './item.css'



const Item = ({nombre, marca, idCategoria, tipo, precio, id, img}) => {
  return (
    <div className='cardPerfumes'>
      <img className='imgPerfume' src={img} alt={nombre}/>
        <div className='infoPerfume'>
          <h3 id='tituloNombre'>{nombre}</h3>
          <p>{marca}</p>
          <h4>{idCategoria}</h4>
          <h3> ${precio}</h3>
          <p>Id {id}</p>
          <button>
          <Link to={`/item/${id}`}>Ver Detalle</Link>
          </button>
        </div>
          
         
    </div>
  )
}
//<button className='btnPerfumes'> Ver Detalles</button>
export default Item