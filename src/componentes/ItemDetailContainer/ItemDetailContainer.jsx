import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetails";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import LoadSecond from "../LoadSecond/LoadSecond";



export const ItemDetailContainer = ( ) => {

  const {idProduct} = useParams()  
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryDb = doc(db, 'products', idProduct )
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