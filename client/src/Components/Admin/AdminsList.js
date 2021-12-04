import { React, useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { getAllAdmins } from '../../redux/APIcalls/user'

function AdminsList() {
const [users,setUsers] = useState([]);


useEffect(() => {
    const fetchAPIData = async () => {
      const data = await getAllAdmins();
      setUsers(data);
    };
    fetchAPIData();
  },[]);
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
                  <Button
                    variant="outline-danger"
                    className="me-2 mx-2"
                    style={{ width: "70px" }}
                  >
                    Delete
                  </Button>
               
                </tr>
              );
            })}
          </tbody>
        </Table>
      </>
    )
}

export default AdminsList