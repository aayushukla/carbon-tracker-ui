import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <img
          src="images/vendia2.png"
          width="15%"
          height="15%"
          className="d-inline-block align-top"
          alt="Vendia logo"
        />
        <Navbar.Brand href="https://www.vendia.net/">
          <img
            src="images/co2-tracker3.png"
            class="img-center"
            alt="Vendia logo"
          />

        </Navbar.Brand>
        <a href="https://www.csus.edu/">
          <img
            src="images/logo.png"
            width="25%"
            height="25%"
            className="d-inline-block align-top"
            alt="Sac state logo"
            align="right"
          />
        </a>
      </Container>
    </Navbar>

  )



}

export default NavBar;