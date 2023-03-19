import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetails";
import LoadSecond from "../LoadSecond/LoadSecond";



export const ItemDetailContainer = ( ) => {

  const {idProduct} = useParams()  
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore()
    const queryDb = doc(db, 'items', idProduct )
    getDoc(queryDb)
    .then(resp => setProduct( { id: resp.id, ...resp.data() } ))
    .finally(() => setLoading(false))
}, [idProduct])

return (
    <div>
        {loading
        ?
            <LoadSecond />
        :
            <ItemDetail product={product}/>
        }
    </div>
)
}

export default ItemDetailContainer