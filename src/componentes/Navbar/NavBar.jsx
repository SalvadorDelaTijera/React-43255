import Carwidget from '../CarWidget/Carwidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import ItemCount from '../ItemCount/ItemCount'

const NavBar = () => {
  return (
    <header>
        <Link className='linkOnce80' to={'/'}>
                <div id='logo'><img src="/public/5.png" alt="" /></div>
        </Link>
        <nav>
            <ul>
                <li>
                    <NavLink className='navLink' to={'/'}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink className='navLink' to={'/categoria/Dama'}>Dama</NavLink>
                </li>
                <li>
                    <NavLink className='navLink' to={'/categoria/Caballero'}>Caballero</NavLink>
                </li>
                <li>
                    <NavLink className='navLink' to={'/categoria/Set'}>Set de Regalo</NavLink>
                </li>
                <li>
                <Carwidget/>
                </li>
                
            </ul>
        </nav>
        
        
    </header>
    //<li>Contacto</li>
  )
}

export default NavBar