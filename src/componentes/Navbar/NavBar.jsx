import Carwidget from '../CarWidget/Carwidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h2>ONCE80.com.mx</h2>
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Dama</li>
                <li>Caballero</li>
                <li>Unisex</li>
                <li>Set de regalo</li>
            </ul>
        </nav>
        <Carwidget/>
        
    </header>
  )
}

export default NavBar