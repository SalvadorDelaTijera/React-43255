import React from "react";
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemLisConteiner.css'
//--------------funciones Firebase---------------
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../../service/config";


const ItemListConteiner = () => {
const[perfumes, setPerfumes] = useState([]);
const {idCategoria} = useParams();

  useEffect(()=>{
    const misPerfumes = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario");
    getDocs(misPerfumes)
    .then( res =>{
      const nuevosPerfumes = res.docs.map( doc =>{
        const data = doc.data();
        return {id: doc.id, ...data}
      })
      setPerfumes(nuevosPerfumes);
    })
    .catch(error => console.log(error))

  }, [idCategoria])
  return(
    <>
    <div>
      <div className="TituloPer">
        <h4> PERFUMES 100% ORIGINALES - ENVÍO A TODO MÉXICO - LOS MEJORES PRECIOS</h4>
      </div>
      < ItemList perfumes={perfumes} />
    </div>
    </> 
  )
}

export default ItemListConteiner