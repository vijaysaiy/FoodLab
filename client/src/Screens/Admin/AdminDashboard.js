import { React, useState } from "react";
import { Link } from "react-router-dom";
import Account from "../User/Account";
import EditProducts from "./EditProducts";
import ProductsList from "./ProductsList";
function AdminDashboard() {
  const [title, setTitle] = useState("Available Products");
  let category = "all";
  
  
  
  return (
    <div className="container">
      <div className="col-lg-2 mx-5 me-0 my-5">
      <ul variant= "pills" class="nav col-lg-8" noStyle id="myTab" role="tablist">
          <li>
            <a href="#manage" data-toggle="tab">Manage Products</a>
          </li>
          <li>
          <a href="#add-products" data-toggle="tab">Add Products</a>
          </li>
          <li>
          <a href="#view-users" data-toggle="tab">View Users</a>
          </li>
        </ul>
      </div>
      <div className="divider me-4"></div>
      <div className="flex-col-lg-8 mx-5 my-5">

        <h2>{title}</h2>
        <div className="tab-content">
            <div className="tab-pane fade" id="manage">
            <ProductsList category={category} />
            </div>
            <div className="tab-pane fade" id="add-products">
           <EditProducts/>
            </div>
            <div className="tab-pane fade" id="view-users">
            Add users
            </div>
        </div>        
      </div>
     </div>
  );
}

export default AdminDashboard;
