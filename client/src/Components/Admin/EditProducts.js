import { React, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import {  updateProduct } from "../../APIcalls/products";

function EditProducts({ item }) {
  let initialValues = {...item}
  const [details,setDetails] =useState(initialValues);
  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
     setDetails({...details,[name]: value });    
  }
  function handleSubmit(event){
    event.preventDefault();
    updateProduct(details);
    alert("Product updated successfully")
    
  }  

  return (
    <>
      <h2>Edit Products</h2>
      <Container className="my-3" style={{ width: "400px" }}>
        <Form>
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Name"
              style={{ width: "400px" }}
              name="name"
              value={details.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Description"
              style={{ width: "400px" }}
              name="description"
              value={details.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Image Source</Form.Label>
            <Form.Control
              type="text"              
              placeholder="Description"
              style={{ width: "400px" }}
              name="imgSrc"
              value={details.imgSrc}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Category"
              style={{ width: "400px" }}
              name="category"
              value={details.category}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Price"
              style={{ width: "400px" }}
              name="price"
              value={details.price}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" onClick = {handleSubmit}>
            Confirm
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default EditProducts;
