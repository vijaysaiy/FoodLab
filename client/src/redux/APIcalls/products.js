import axios from "axios"

export const getProducts = async (category) => {
  let url;
  if(category !== "all") {
    url = `http://localhost:8080/products/category/${category}`;
  }
  else{
    url ='http://localhost:8080/products/enabled'
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
    console.log(error)    
  }
};

export const searchProductbyId = async(id) => {
 try {
   const res = await axios.get(`http://localhost:8080/products/search/${id}`);
   return res.data 
 } catch (error) {
   console.log(error)
 }
}
export const getAllProducts = async() => {
  try {
    const res = await axios.get("http://localhost:8080/products/all");
    return res.data
  } catch (error) {
    console.log(error) 
  }
}

export const updateProduct = async (newDetails) => {
  try {
    const res = await axios.put(`http://localhost:8080/products/update/${newDetails.id}`,newDetails)
    console.log(res);
  } catch (error) {
    console.log(error)
  }
}
export const addProduct = async (details) => {
  try {
    const res = await axios.post(`http://localhost:8080/products/add`,details)
    console.log(res);
  } catch (error) {
    console.log(error)
  }
}
export const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:8080/products/delete/${id}`)
    console.log(res);
  } catch (error) {
    console.log(error)
  }
}