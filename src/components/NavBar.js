import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        {/* <img
          src="images/logo.png"
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        /> */}

        <a href="https://www.vendia.net/">
          <img
            src="images/Vendia.jpg"
            width="90%"
            height="60"
            margin="auto"
            // className="d-inline-block align-top"
            alt="Vendia logo"
          />
        </a>

        <Navbar.Brand href="#">Hornet Power Tools</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Dashboard</Nav.Link>
            <NavDropdown title="Carbon Emission" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Tool 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Tool 2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                About
              </NavDropdown.Item>
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

export default NavBar;