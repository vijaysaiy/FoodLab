import { React, useState, useEffect } from "react";

import { getProducts,searchProducts } from "../APIcalls/products";
import ErrorCompnonent from "./ErrorCompnonent";
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
    return <ErrorCompnonent/>
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
