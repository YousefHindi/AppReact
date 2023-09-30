import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">Food Recepies</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link as={Link} to="/browse">Cuisines</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
