import axios from "axios";
import { loginFailure, loginStart, loginSucess } from "../userRedux";

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
        const res = await axios.post("http://localhost:8080/users/add",user)
    } catch (error) {
        console.log(error)
    }
   
}
export const updateUserDetails = async (userDetails) => {
    console.log(userDetails.email);
    try{       
        const res = await axios.put(`http://localhost:8080/users/update/${userDetails.id}`,userDetails)
    }catch (error) {
        console.log(error)
    }

}