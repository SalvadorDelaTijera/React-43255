import { useContext } from 'react';
import { CarContext } from '../../contexx/CarritoContext';
import { Link } from 'react-router-dom';
import './Carwidget.css'
const imgCarrito = "https://w7.pngwing.com/pngs/725/39/png-transparent-iconfinder-syre-icon-design-shopping-cart-text-service-rectangle-thumbnail.png";

  const Carwidget = () => {
    const {cantidadTotal} = useContext(CarContext);
    return (
      <div>
          <Link to="/cart">
              <img className = 'imgCarrito' src={imgCarrito} alt="Carrito" />
                {
                  cantidadTotal > 0 && <strong> {cantidadTotal}</strong>
                }
          </Link>
      </div>
    
  )
}

export default Carwidget