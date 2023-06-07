import './Carwidget.css'


const Carwidget = () => {
    const imgCarrito = "https://w7.pngwing.com/pngs/725/39/png-transparent-iconfinder-syre-icon-design-shopping-cart-text-service-rectangle-thumbnail.png";
  return (
    <div>
        <img className = 'imgCarrito' src={imgCarrito} alt="Carrito" />
        <strong>10</strong>
    </div>
    
  )
}

export default Carwidget