import { React, useState } from "react";
import { Link } from "react-router-dom";
import RecentOrders from "../../Components/RecentOrders";
import UpdateAccount from "../../Components/UpdateAccount";
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
        {orders ? <RecentOrders /> : <UpdateAccount />}
      </div>
    </div>
  );
}

export default UserDashboard;
