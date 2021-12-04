import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../APIcalls/user";
function Login() {
  const [email, setEmail] =useState("")
  const [password, setPassword] =useState("")
  const dispatch = useDispatch();
  const {isFetching ,error} = useSelector(state => state.user)
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch,{email,password})
  }
  return (
    <Card className="my-4 mx-auto " style={{ width: "600px" }}>
      <Card.Text
        className="text-center"
        style={{ fontSize: "30px", borderBottom: "1px solid grey" }}
      >
        Login
      </Card.Text>
      <Container className="my-2" style={{ width: "400px" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              style={{ width: "400px" }}
              onChange ={e => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              style={{ width: "400px" }}
              onChange ={e => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button className ="me-2" variant="primary" type="submit" onClick ={handleLogin} disabled={isFetching}>
            Submit
          </Button>
          {error && <span className="text-danger">Bad Credentials</span>}
        </Form>
      </Container>
    </Card>
  );
}

export default Login;
