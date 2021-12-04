import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecentOrders from "./RecentOrders";
import Account from "./Account";
function UserDashboard() {
  const [orders, setOrders] = useState(true);
  const [title, setTitle] = useState("Recent Orders");

  function handleClick(e) {
    if (e.target.name === "account") {
      setOrders(false);
      setTitle("Account");
    } else {
      setOrders(true);
      setTitle("Recent Orders");
    }
  }
  return (
    <div className="container">
      <div className="col-lg-2 my-5">
        <ul>
          <li>
            <Link to="#" name="account" onClick={handleClick}>
              Manage Account
            </Link>
          </li>
          <li>
            <Link to="#" name="orders" onClick={handleClick}>
              Recent Orders
            </Link>
          </li>
        </ul>
      </div>
      <div className="divider me-5"></div>
      <div className="col-lg-8 my-5">
        <h1>{title}</h1>
        {orders ? <RecentOrders /> : <Account />}
      </div>
    </div>
  );
}

export default UserDashboard;
