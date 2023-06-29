import './ItemDetail.css'
const ItemDetail = ({id, nombre, precio, idCategoria, img}) => {
  return (
    <div className="Detalle">
        <h3>{nombre}</h3>
        <h4>Precio: {precio}</h4>
        <h3>{idCategoria}</h3>
        <h5>ID: {id}</h5>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil impedit accusantium sed vitae, nisi officia dolorum obcaecati beatae debitis animi.</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail