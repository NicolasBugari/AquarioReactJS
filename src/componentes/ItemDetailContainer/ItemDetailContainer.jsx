import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetails";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import LoadSecond from "../LoadSecond/LoadSecond";



export const ItemDetailContainer = ( ) => {

  const {id} = useParams()  
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore()
    const queryDb = doc(db, 'items', id )
    getDoc(queryDb)
    .then(resp => setProduct( { id: resp.id, ...resp.data() } ))
    .finally(() => setLoading(false))
}, [id])

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