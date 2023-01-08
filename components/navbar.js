import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container style={{ maxWidth: "100%" }}>
        <Navbar.Brand href="#home">Products Inventory</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style = {{marginBottom:10}} />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ justifyContent: "flex-end" }}
        >
          <Form className="d-flex mr-10">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant = 'dark'><FaSearch/></Button>
          </Form>
          <Nav>
            <Nav.Link><Link href='/new' className = 'link'>Add Product</Link></Nav.Link>
            <Nav.Link eventKey={2}>
              Export 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
