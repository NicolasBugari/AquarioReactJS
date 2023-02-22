import React, { useEffect, useState} from "react";
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";


export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const { name } = useParams();
    const URL = `https://fakestoreapi.com/products/category/${name}`;


useEffect(() => {
const prod = async () => {
    try {
      const resAway = await fetch(URL);
      const data = await resAway.json();
      setProducts(data);
    } catch {
      setError(true);
    }
  };

  prod();
}, [name]);

return (
  <>
    <h1>{greeting}</h1>
    {!error ? (
      <>
        {products.length ? (
          <ItemList products={products} />
        ) : (
          <h1>Cargando...</h1>
        )}
      </>
    ) : (
      <h1>Hubo un error</h1>
    )}
  </>
);
};

export default ItemListContainer;

