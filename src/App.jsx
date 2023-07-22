
import NavBar from './componentes/Navbar/NavBar'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner';
import ItemDetailConteiner from './componentes/ItemDetailConteiner/ItemDetailConteiner';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import {CarProvider}  from './contexx/CarritoContext';



function App() {
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
                  <Route path='/checkout' element={<Checkout/>}/>
              </Routes>
        </CarProvider>
      </BrowserRouter>
    </>
  )
}
export default App
