import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';



import { useNavigate } from 'react-router-dom';






function OffcanvasExample() {

 
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="#">Mighty-Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-grow-1 pe-3">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/SignUp">SignUp</Nav.Link>


              <NavDropdown
                title="Account"
                id="offcanvasNavbarDropdown-expand-lg"
                 >



                <NavDropdown.Item href="/LogIn">
                  Log In
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item 
                href="#action5">
                  Log Out
                </NavDropdown.Item>



              </NavDropdown>
            </Nav>
            <div className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 form-control-sm"
                aria-label="Search"
              />
              <Button variant="outline-success btn-sm">Search</Button>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;
