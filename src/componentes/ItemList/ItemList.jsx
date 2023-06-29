import React from "react";
import Item from '../Item/Item.JSX'
import'./ItemList.css'
const ItemList = ({perfumes}) => {
  return (
    <div className = "contenedorPerfumes">
      {perfumes.map(prod => <Item key={prod.id}{...prod}/>)}
    </div>
  )
}

export default ItemList