import { React, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Account from "../../Components/UpdateAccount";
import AddProducts from "../../Components/Admin/AddProducts";
import EditProducts from "../../Components/Admin/EditProducts";
import ProductsList from "../../Components/Admin/ProductsList";
import UsersList from "../../Components/Admin/UsersList";
function AdminDashboard() {
  const [screen, setScreen] = useState("products");
  const [item,setItem] = useState([]);
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
        {screen === "users" && <UsersList  type = {"users"}/>}
        {screen === "admins" && <UsersList type ={"admins"} />}
        {screen === "account" && <Account/>}
      </div>
    </div>
  );
}

export default AdminDashboard;

