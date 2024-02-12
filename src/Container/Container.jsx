import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Containers = ({setPage}) => {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand  onClick={() => setPage('Home')}>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  onClick={() => setPage('Home')}>Home</Nav.Link>
            <Nav.Link onClick={() => setPage('View')}>View</Nav.Link>
            <Nav.Link  onClick={() => setPage('Contact us')}>Contact us</Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};

export default Containers;
