import React from "react";
import { useSelector } from "react-redux";

function OrderSummary() {
  const { purchaseReport } = useSelector((state) => state.cart);

  return (
    <>
      <div className="container my-5 flex">
        <div className="row">
          <h1>Payment success</h1>
          <h2>Your order has been Placed</h2>
        </div>
      </div>
      <h5 style={{ marginLeft: "10vw" }}>Order Details</h5>
      <div className="card my-auto mx-auto" style={{ width: "80vw" }}>
        <div className="container flex-row justify-content-between">
          <h4>Shipping Address</h4>
          <h4>Payment Method</h4>
          <h4>Order Summary</h4>
        </div>
        <div className="container flex-col justify-content-between">
          <div>
            <p>
              {purchaseReport[0].username}
              <br />
              {purchaseReport[0].address}
              <br />
              {purchaseReport[0].state}
              &nbsp;,
              {purchaseReport[0].city}
              &nbsp;,
              {purchaseReport[0].zip}
              <br />
              {purchaseReport[0].mobile}
            </p>
          </div>
          <div>
            <p>Card</p>
          </div>
          <p>
            <b>Total Price:&nbsp;₹{purchaseReport[0].totalPrice}</b>
          </p>
        </div>
      </div>
    </>
  );
}

export default OrderSummary;
