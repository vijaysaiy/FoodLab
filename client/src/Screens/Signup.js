import React, { useState } from 'react'
import { Form, Button, Container, Card } from "react-bootstrap";
import { register } from '../APIcalls/user';

function Signup() {
  const initialValues = {username:"",email:"",mobile:""};
  const [userDetails,setUserDetails] = useState(initialValues);
  function handleInputs(event) {
    let name = event.target.name;
    let value = event.target.value;
    setUserDetails({...userDetails,[name]: value });
  }
  console.log(userDetails);
  function handleSubmit(e) {
    e.preventDefault();
    if(userDetails.username.includes("admin") || userDetails.email.includes("admin")){
      alert("Username/email cannot be admin")
      return;
    }
    if(userDetails.password === userDetails.cpassword){
      register(userDetails);
      setUserDetails(initialValues);
      alert("Register Sucess,Please Login");      
    }
    else{
      alert("Passwords don't match")
    }
  }
    return (
        <Card className="my-4 mx-auto " style={{ width: "600px" }}>
      <Card.Text
        className="text-center"
        style={{ fontSize: "30px", borderBottom: "1px solid grey" }}
      >
        Register
      </Card.Text>
      <Container className="my-2" style={{ width: "400px" }}>
        <Form>
          <Form.Group className="mb-3" >
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              style={{ width: "400px" }}
              name = "username"
              value ={userDetails.username}
              onChange={handleInputs}
              required
              
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              style={{ width: "400px" }}
              name = "email"
              value ={userDetails.email}
              onChange={handleInputs}
              
            />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Mobile No</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Mobile"
              style={{ width: "400px" }}
              name="mobile"
              value ={userDetails.mobile}
              onChange={handleInputs}
              required
              
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              style={{ width: "400px" }}
              name ="password"
              value ={userDetails.password}
              onChange={handleInputs}
              required 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              style={{ width: "400px" }}
              name = "cpassword"
              value ={userDetails.cpassword}
              onChange={handleInputs}
              required 
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Register
          </Button>
        </Form>
      </Container>
    </Card>
    )
}

export default Signup
