import React from 'react'
import { Link } from "react-router-dom";

import {NavDropdown} from 'react-bootstrap'
function CategoryMenu() {
    return (
        <NavDropdown title="Categories" id="navbarScrollingDropdown">
        <NavDropdown.Item as={Link} to="/fooditems/starters">
          Starters
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/fooditems/maincourse">
          Main Course
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/fooditems/shawarmas">         
        Shawarmas
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/fooditems/kebabs">         
         Kebab Special
        </NavDropdown.Item>              
        <NavDropdown.Item as={Link} to="/fooditems/soups">         
         Soups
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/fooditems/desserts">         
         Deserts
        </NavDropdown.Item>
      </NavDropdown>
    )
}

export default CategoryMenu
