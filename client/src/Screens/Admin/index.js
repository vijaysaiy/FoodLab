import { React, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Account from "../User/Account";
import AddProducts from "./AddProducts";
import AdminsList from "./AdminsList";
import EditProducts from "./EditProducts";
import ProductsList from "./ProductsList";
import UsersList from "./UsersList";
function AdminDashboard() {
  const [screen, setScreen] = useState("products");
  const [item,setItem] = useState([]);
  let category = "all";

  return (
    <div className="container">
      <div className="col-lg-2  me-2 my-5">
        <ListGroup className ="my-4" >
          <ListGroup.Item action  onClick={() => setScreen("products")}>
            Manage Products
          </ListGroup.Item>
          <ListGroup.Item action  onClick={() => setScreen("add")}>
            Add Products
          </ListGroup.Item>
          <ListGroup.Item action  onClick={() => setScreen("users")}>
            View Users
          </ListGroup.Item>
          <ListGroup.Item action  onClick={() => setScreen("admins")}>
            View Admins
          </ListGroup.Item>
          <ListGroup.Item action  onClick={() => setScreen("account")}>
            Manage Account
          </ListGroup.Item>
        </ListGroup>        
      </div>
      <div className="divider me-4"></div>
      <div className="flex-col-lg-8 mx-5 my-5">
        {screen === "products" && <ProductsList  setScreen = {setScreen} setItem ={setItem}/>}
        {screen === "add" && <AddProducts />}
        {screen === "edit" && <EditProducts item ={item} />}
        {screen === "users" && <UsersList />}
        {screen === "admins" && <AdminsList />}
        {screen === "account" && <Account />}
      </div>
    </div>
  );
}

export default AdminDashboard;

