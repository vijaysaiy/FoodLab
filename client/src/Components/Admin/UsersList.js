import { React, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { getAllUsers,deleteUser,getAllAdmins } from '../../APIcalls/user'
import ErrorCompnonent from "../ErrorCompnonent";

function UsersList({type}) {
const [users,setUsers] = useState([]);
const [isDeleted, setIsDeleted] = useState(false);
const [title,setTitle] = useState("")
function handleDelete(id){
  deleteUser(id);
  setIsDeleted(!isDeleted);
}
useEffect(() => {
    const fetchAPIData = async () => {
      let data;
      if(type === "users"){
        data = await getAllUsers();
        setTitle("Users List")
      }else{
        data = await getAllAdmins();
        setTitle("Admins List")
      }
      setUsers(data);
    };
    fetchAPIData();
  },[isDeleted,type]);

  if(!users){
    return (<ErrorCompnonent />)
  }
    return (
        <>
        <h2>{title}</h2>
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>              
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (
                <tr key={item.id}>                   
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>                                  
                  <button                    
                    className="btn btn-outline-danger me-2 mx-2 my-2"
                    onClick ={()=> handleDelete(item.id)}
                  >
                    Delete
                  </button>
               
                </tr>
              );
            })}
          </tbody>
        </Table>
      </>
    )
}

export default UsersList
