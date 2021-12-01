import { React, useState, useEffect } from "react";

import { getProducts,searchProducts } from "../redux/APIcalls/products";
import Fooditem from "./Fooditem";

function Fooditems({ category, search }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchAPIData = async () => {
      let data;
      if(search){
        data = await searchProducts(search);
      }
      else {
        data = await getProducts(category);
      }      
      if (!data) {
        setError(true);
      } else {
        setProducts(data);
      }
    };
    fetchAPIData();
  }, [category, search]);

  if (error) {
    return <h1>Something went wrong</h1>;
  }
   else{
    return (
      <>
        {products.map((item) => {
          return <Fooditem key={item.id} {...item} />;
        })}
      </>
    );
  }
}

export default Fooditems;
