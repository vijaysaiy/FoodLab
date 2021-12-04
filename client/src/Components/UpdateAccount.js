import {React,useState} from 'react'
import { Form, Button, Container, } from "react-bootstrap";
import { useSelector} from 'react-redux';
import {updateUserDetails} from "../APIcalls/user"
function Account() {
  const user = useSelector(state => state.user.currentUser);
  // const existingDetails = {id:user.id,email:user.email,username:user.username,password:user.password,mobile:user.mobile,cpassword:""}
  const existingDetails = {...user,cpassword:""};
  const [userDetails,setUserDetails] = useState(existingDetails);
  const handleChange = (event) =>{
    let name = event.target.name;
    let value = event.target.value;
    setUserDetails({...userDetails,[name]: value});
  }
  const handleSubmit = (event) =>{
    event.preventDefault();   
    updateUserDetails(userDetails);
    alert("Update Successfull")
  }
    return (        
      <Container className="my-2" style={{ width: "400px" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              style={{ width: "400px" }}
              name = "username"
              value = {userDetails.username}
              onChange = {handleChange}
            />
          </Form.Group> 
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Change Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              style={{ width: "400px" }}
              name = "password"
              value = {userDetails.password}
              onChange = {handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              style={{ width: "400px" }}
              name = "cpassword"
              value = {userDetails.cpassword}
              onChange = {handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Mobile No</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Mobile"
              style={{ width: "400px" }}
              name="mobile"
              value = {userDetails.mobile}
              onChange = {handleChange}             
              required              
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick = {handleSubmit}>
           Confirm
          </Button>
        </Form>
      </Container>
   
    )
}

export default Account
