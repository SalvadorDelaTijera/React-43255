
import NavBar from './componentes/Navbar/NavBar'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'
import ItemDetailConteiner from './componentes/ItemDetailConteiner/ItemDetailConteiner'
import { BrowserRouter, Routes, Route  } from "react-router-dom"

const App = () =>{
  return(
    <>
    
      <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path='/' element={<ItemListConteiner/>}/>
              <Route path='/categoria/:idCategoria' element={<ItemListConteiner/>}/>
              <Route path='/item/:idItem' element={<ItemDetailConteiner/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
/*
      <ItemListConteiner/>
      <ItemDetailConteiner/>

*/
