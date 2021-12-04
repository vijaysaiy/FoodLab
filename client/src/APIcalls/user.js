import axios from "axios";
import { loginFailure, loginStart, loginSucess } from "../redux/userRedux";

export const login = async (dispatch,user) => {
    dispatch(loginStart());
    let url;
    if(user.email.includes("admin")){
        url = "http://localhost:8080/admins/login"
    }else{
        url = "http://localhost:8080/users/login"
    }
    try {
        const res = await axios.post(url,user);
        dispatch(loginSucess(res.data))
    } catch (error) {
        dispatch(loginFailure());
       
    }
}
export const register = async (user) => {
    try {
        const res = await axios.post("http://localhost:8080/users/add",user);
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
   
}
export const updateUserDetails = async (userDetails) => {
    let url;
    if(userDetails.email.includes("admin")){
        url = `http://localhost:8080/admins/update/${userDetails.id}`
    }else{
        url =`http://localhost:8080/users/update/${userDetails.id}`
    }
    try{       
        const res = await axios.put(url,userDetails);
        console.log(res.data);
    }catch (error) {
        console.log(error)
    }

}
export const getAllUsers = async() => {
    try {
      const res = await axios.get("http://localhost:8080/users/all");
      return res.data
    } catch (error) {
      console.log(error) 
    }
  }
export const getAllAdmins = async() => {
    try {
      const res = await axios.get("http://localhost:8080/admins/all");
      return res.data
    } catch (error) {
      console.log(error) 
    }
  }
  export const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8080/users/delete/${id}`)
      console.log(res);
    } catch (error) {
      console.log(error)
    }
  }