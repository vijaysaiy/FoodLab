import React from 'react'
import { Form, Button, Container, } from "react-bootstrap";

function EditProducts() {
    return (
        <Container className="my-2" style={{ width: "400px" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Name"
              style={{ width: "400px" }}
              name = "username"
              // value = {userDetails.username}
              // onChange = {handleChange}
            />
          </Form.Group> 
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              style={{ width: "400px" }}
              name = "password"
              // value = {userDetails.password}
              // onChange = {handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Category"
              style={{ width: "400px" }}
              name = "cpassword"
              // value = {userDetails.cpassword}
              // onChange = {handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Mobile"
              style={{ width: "400px" }}
              name="mobile"
              // value = {userDetails.mobile}
              // onChange = {handleChange}             
              required              
            />
          </Form.Group>
          <Button variant="primary" type="submit" >
           Confirm
          </Button>
        </Form>
      </Container>
   
    )
}

export default EditProducts
