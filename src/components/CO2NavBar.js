import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';

function CO2NavBar()  {

    return (
      <Navbar bg='light' style = {{padding: '1.5%'}}>
        <Container fluid>
        <img
              src="images/vendia2.png"
              width="12%"
              height="12%"
              className="d-inline-block align-top"
              alt="Vendia logo"
            />
          <Navbar.Brand href="/home" style={{marginLeft: 10}}>CO2 Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/home">Home</Nav.Link>
              <NavDropdown title="Suppliers" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/battery">Battery Supplier</NavDropdown.Item>
                <NavDropdown.Item href="/motor">Motor Supplier</NavDropdown.Item>
                <NavDropdown.Item href="/seaRoute">Sea Transport</NavDropdown.Item>
                <NavDropdown.Item href="/roadRoute">Road Transport</NavDropdown.Item>
                <NavDropdown.Item href="/hpt">Hornet Power Tool</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Tools" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/totalco2">CO2 Calculator</NavDropdown.Item>
                <NavDropdown.Item href="/co2History">CO2 History</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              {/* <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              /> */}
              <Link to="/userProfile">
              <Avatar src="/broken-image.jpg" style={{backgroundImage:"linear-gradient(130deg,#6304ff,#23adf3)"}}/>
              </Link>&nbsp;&nbsp;
              <Link to="/">
                  <Button variant="success" style={{backgroundImage:"linear-gradient(130deg,#6304ff,#23adf3)"}}>Sign Out</Button>
              </Link> 
            </Form>
            {/* <a href="https://www.csus.edu/">
            <img
              src="images/logo.png"
              width="100%"
              height="60"
              className="d-inline-block align-top"
              alt="Sac state logo"
            />
          </a> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export default CO2NavBar;