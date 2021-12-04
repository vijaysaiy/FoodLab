import { React, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { getAllUsers,deleteUser } from '../../redux/APIcalls/user'

function UsersList() {
const [users,setUsers] = useState([]);
const [isDeleted, setIsDeleted] = useState(false);
function handleDelete(id){
  deleteUser(id);
  setIsDeleted(!isDeleted);
}
useEffect(() => {
    const fetchAPIData = async () => {
      const data = await getAllUsers();
      setUsers(data);
    };
    fetchAPIData();
  },[isDeleted]);
    return (
        <>
        <h2>Manage Products</h2>
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
