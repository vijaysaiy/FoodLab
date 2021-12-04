import axios from "axios";

export const pushToDatabase = async (report) => {
    try{
        const res = await axios.post("http://localhost:8080/purchase/add",report);
        console.log(res.data)
    }catch(e){
        console.log(e);
    }
}
export const getReport = async (username) => {
     try {
         const res = await axios.get(`http://localhost:8080/purchase/search/${username}`)
         return res.data;
     } catch (error) {
         console.log(error);
     }
}