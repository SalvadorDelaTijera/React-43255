
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import './ItemDetailConteiner.css'
//-----------nuevas funciones--------
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../service/config";

function ItemDetailConteiner() {
  const [perfume, setPerfume] = useState(null);
  const {idItem} = useParams();

    useEffect (()=>{
      const nuevoDoc = doc(db, "inventario", idItem);

      getDoc(nuevoDoc)
      .then(res =>{
        const data = res.data();
        const nuevoPerfume = {...data, id: res.id };
        setPerfume(nuevoPerfume);
      })
      .catch(error => console.log(error))

    },[idItem])

  return (
    <div className="ConteinerDetalle">
      <ItemDetail {...perfume} />
    </div>
  );
}

export default ItemDetailConteiner