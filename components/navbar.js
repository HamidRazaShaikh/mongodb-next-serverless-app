import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/router";
import { GlobalContext } from "../context/globalState";

function NavbarComponent() {
  const context = useContext(GlobalContext);
  const { addSearchTerm } = useContext(GlobalContext);

  let route = useRouter();

  const handleChange = (e) => {
    e.preventDefault();
    addSearchTerm(e.target.value);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container style={{ maxWidth: "100%" }}>
        <Navbar.Brand href="#home">Products Inventory</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ marginBottom: 10 }}
        />
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
              onChange={handleChange}
            />
            <Button variant="dark">
              <FaSearch />
            </Button>
          </Form>
          <Nav>
            <Nav.Link href="/new">Add Product</Nav.Link>
            {route?.asPath === "/" ? (
              <Nav.Link eventKey={2} href="/">
                Export
              </Nav.Link>
            ) : (
              <Nav.Link eventKey={2} href="/">
                <FiArrowLeft /> Back
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
