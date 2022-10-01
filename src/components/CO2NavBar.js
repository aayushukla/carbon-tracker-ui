import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class CO2NavBar extends Component {

  render() {
    return (
      <Navbar bg="light">
        <Container fluid>
          <a href="https://www.vendia.net/">
            <img
              src="images/Vendia.jpg"
              width="90%"
              height="60"
              // className="d-inline-block align-top"
              alt="Vendia logo"
            />
          </a>
          <Navbar.Brand href="/home" style={{marginLeft: 30}}>CO2 Emission</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/home">Home</Nav.Link>
              <NavDropdown title="Sources" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Battery Supplier</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Motor Supplier</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Sea Transport</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Road Transport</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Drill Assembly</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Product 1</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Product 2</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Product 3</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Tools" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/totalco2">CO2 Calculator</NavDropdown.Item>
                <NavDropdown.Item href="#action4">CO2 History</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default CO2NavBar;