import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Navlink = () => {
  
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home" >Home</Nav.Link>
      <Nav.Link as={Link} to="/">Login</Nav.Link>
      <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </div>
  )
}
