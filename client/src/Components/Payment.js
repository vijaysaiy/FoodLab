import React from 'react'
import { Form, Button,  Card,Col,Row } from "react-bootstrap";
import {Link} from "react-router-dom"
function Payment({pay}) {
    return (
        <Card className="my-4 mx-auto "style={{ width: "600px" }}>
        <Card.Text
        className="text-center"
        style={{ fontSize: "30px", borderBottom: "1px solid grey" }}
      >
        Enter Card Details
      </Card.Text>
        <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter Name" name = "username" />
          </Form.Group>         
        </Row>
      
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Card Number</Form.Label>
          <Form.Control required placeholder="Card Number" name= "cardNum" />
        </Form.Group>   
      
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            
            <Form.Control required name= "MM" placeholder="MM" />
          </Form.Group>
          <Form.Group as={Col} >
           
            <Form.Control required name = "YYYY" placeholder="YYYY"/>
          </Form.Group> 
      
          <Form.Group as={Col} controlId="formGridCVV">           
            <Form.Control required type= "password" name= "CVV" placeholder="CVV" />
          </Form.Group>
        </Row>     
        <Button as = {Link} to="/success" variant="primary" className="ml-auto"  type="submit" onClick = {pay}>
          Pay Now
        </Button>        
      </Form>
      </Card>
    )
}

export default Payment
