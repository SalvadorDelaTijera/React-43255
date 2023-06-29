
import { useState, useEffect } from "react"
import { getUnPerfume } from "../../asynmock"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import './ItemDetailConteiner.css'

function ItemDetailConteiner() {
  const [perfume, setPerfumes] = useState(null);

  const {idItem} = useParams();

  useEffect(() => {
    getUnPerfume(idItem)
      .then(res => setPerfumes(res))
      .catch(error => console.log(error));
  },[idItem])

  return (
    <div className="ConteinerDetalle">
      <ItemDetail {...perfume} />
    </div>
  );
}

export default ItemDetailConteiner