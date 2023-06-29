import Carwidget from '../CarWidget/Carwidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <Link to={'/'}>
          <h2>ONCE80</h2>
        </Link>
        <nav>
            <ul>
                <li>
                    <NavLink to={'/'}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to={'/categoria/Dama'}>Dama</NavLink>
                </li>
                <li>
                    <NavLink to={'/categoria/Caballero'}>Caballero</NavLink>
                </li>
                <li>
                    <NavLink to={'/categoria/Set'}>Set de Regalo</NavLink>
                </li>
                
            </ul>
        </nav>
        <Carwidget/>
        
    </header>
    //<li>Contacto</li>
  )
}

export default NavBar