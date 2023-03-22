import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import { db } from '../../firebase/firebase';
import Load from "../Load/Load";

function ItemListContainer({greeting}) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()

    useEffect(() => {
        if (idCategory) {
            const queryCollectionCategory = query(collection(db, 'products'), where('category', '==', idCategory) )
            getDocs(queryCollectionCategory)
            .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
            .finally(() => setLoading(false))
        } else {
            const queryCollection = collection(db, 'products')
            getDocs(queryCollection)
            .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
            .finally(() => setLoading(false))
        }  
    }, [idCategory])

    return (
        <div>
            <h2> {greeting} </h2>
            <div>
                <div>
                    { loading 
                    ? 
                        <Load />
                    :
                        <ItemList products={products}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer

