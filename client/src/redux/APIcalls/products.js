import axios from "axios"

export const getProducts = async (category) => {
  let url;
  if(category !== "all"){
    url = `http://localhost:8080/products/category/${category}`;
  }
  else{
    url ='http://localhost:8080/products/all'
  }
   try {
    const res = await axios.get(url);    
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const searchProducts = async (search) => { 
  try {
      const res = await axios.get(      
      `http://localhost:8080/products/name/${search}`
    );     
    return res.data;
  } catch (error) {    
  }
};
