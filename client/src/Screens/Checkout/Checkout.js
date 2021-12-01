import { React, useState } from "react";
import { Form, Col, Row, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getTotalPrice, addCheckoutDetails } from "../../redux/cartRedux";
import Payment from "../../Components/Payment";
function Checkout() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const initialValues = {
    username: user.username,
    mobile: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    name: "",
  };
  const [deliveryDetails, setDeliveryDetails] = useState(initialValues);
  const totalPrice = getTotalPrice(products);
  
  function handleInputs(event) {
    let name = event.target.name;
    let value = event.target.value;
    setDeliveryDetails({ ...deliveryDetails, [name]: value });
  }

  function handleSubmit() {
    dispatch(addCheckoutDetails({ deliveryDetails, products, totalPrice }));
  }

  return (
    <div className="container">
      <div className="left">
        <Card className="my-4 mx-auto " style={{ width: "600px" }}>
          <Card.Text
            className="text-center"
            style={{ fontSize: "30px", borderBottom: "1px solid grey" }}
          >
            Enter Delivery Address
          </Card.Text>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={deliveryDetails.name}
                  onChange={handleInputs}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Mobile"
                  name="mobile"
                  value={deliveryDetails.mobile}
                  onChange={handleInputs}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                name="address"
                value={deliveryDetails.address}
                onChange={handleInputs}
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  name="city"
                  value={deliveryDetails.city}
                  onChange={handleInputs}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>State</Form.Label>
                <Form.Control
                  name="state"
                  value={deliveryDetails.state}
                  onChange={handleInputs}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  name="zip"
                  value={deliveryDetails.zip}
                  onChange={handleInputs}
                />
              </Form.Group>
            </Row>
          </Form>
        </Card>
      </div>
      <div className="right">
        <Payment pay={handleSubmit} />
      </div>
    </div>
  );
}

export default Checkout;
