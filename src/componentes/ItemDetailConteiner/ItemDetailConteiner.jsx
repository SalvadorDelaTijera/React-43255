
import { useState, useEffect } from "react"
//import { getUnPerfume } from "../../asynmock"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import './ItemDetailConteiner.css'
//-----------nuevas funciones--------
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../service/config";

function ItemDetailConteiner() {
  const [perfume, setPerfumes] = useState(null);
  const {idItem} = useParams();

    useEffect (()=>{
      const nuevoDoc = doc(db, "inventario", idItem);

      getDoc(nuevoDoc)
      .then(res =>{
        const data = res.data();
        const nuevoPerfume = {id: res.id, ...data};
        setPerfumes(nuevoPerfume);
      })
      .catch(error => console.log(error))

    },[idItem])

  /*
  useEffect(() => {
    getUnPerfume(idItem)
      .then(res => setPerfumes(res))
      .catch(error => console.log(error));
  },[idItem])
  */
  return (
    <div className="ConteinerDetalle">
      <ItemDetail {...perfume} />
    </div>
  );
}

export default ItemDetailConteiner