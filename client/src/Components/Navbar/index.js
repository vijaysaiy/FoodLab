import {React,useState} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {Navbar,Nav,Form,FormControl,Button,Container,Badge } from "react-bootstrap"
import {getTotalQuantity} from '../../redux/cartRedux'
import AccountMenu from "./AccountMenu";
import CategoryMenu from "./CategoryMenu";

function NavigationBar() {
  const { products  } = useSelector((state) => state.cart);
  const [search,setSearch] = useState();
  function handleSearch(e){
    setSearch(e.target.value)
  }
 
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Foodbox
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/fooditems/all">
              Food Items
            </Nav.Link>
            <CategoryMenu/>
          </Nav>
          <Form className="d-flex mx-auto">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ minWidth: "50vw"}}
              onChange={handleSearch}             
            />
            <Button as={Link} to ={`/fooditems/search/${search}`} variant="outline-success">Search</Button>
          </Form>
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <AccountMenu/>
            <Button variant="primary" as={Link} to="/cart">
              Cart <Badge bg ='secondary'>{getTotalQuantity(products)}</Badge>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
