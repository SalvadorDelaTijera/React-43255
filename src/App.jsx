
import NavBar from './componentes/Navbar/NavBar'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner';
import ItemDetailConteiner from './componentes/ItemDetailConteiner/ItemDetailConteiner';
import Cart from './componentes/Cart/Cart';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import ItemCount from './componentes/ItemCount/ItemCount';
import {CarProvider}  from './contexx/CarritoContext';



const App = () =>{
  return(
    <>
      <BrowserRouter>
        <CarProvider>
            <NavBar/>
              <Routes>
                  <Route path='/' element={<ItemListConteiner/>}/>
                  <Route path='/categoria/:idCategoria' element={<ItemListConteiner/>}/>
                  <Route path='/item/:idItem' element={<ItemDetailConteiner/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                  <Route path='/checkout' element={<h3>En construcciòn</h3>}/>
              </Routes>
        </CarProvider>
      </BrowserRouter>
    </>
  )
}
export default App
/*
      <ItemListConteiner/>
      <ItemDetailConteiner/>
      < ItemCount/>
*/
