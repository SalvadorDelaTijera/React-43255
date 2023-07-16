import React from "react";
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getPerfumes, getPerfumesCategoria } from "../../asynmock"
import { useParams } from "react-router-dom"
import './ItemLisConteiner.css'


const ItemListConteiner = () => {
const[perfumes, setPerfumes] = useState([]);

const {idCategoria} = useParams();


  useEffect(() =>{

      const funcionPerfumes = idCategoria ? getPerfumesCategoria : getPerfumes;
        funcionPerfumes(idCategoria)
        .then(res => setPerfumes(res))
        .catch(error => console.log(error))
  },[idCategoria])
  return(
    <div>
      <div className="TituloPer">
        <h4> PERFUMES 100% ORIGINALES - ENVÍO A TODO MÉXICO - LOS MEJORES PRECIOS</h4>
      </div>
      <ItemList perfumes={perfumes}/>
    </div>
  )
}
  /*
    getPerfumes()
      .then(respuesta => setPerfumes(respuesta))
      .catch(error => console.log(error))
      */

export default ItemListConteiner