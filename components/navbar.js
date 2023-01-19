import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/router";
import { GlobalContext } from "../context/globalState";
import exportToExcel from "../functions/export";

function NavbarComponent() {
  const context = useContext(GlobalContext);
  const { addSearchTerm , items} = useContext(GlobalContext);
  const JsonData = JSON.stringify(items)
 
  const route = useRouter();
  const {id} = route.query;


  const handleChange = (e) => {
    e.preventDefault();
    addSearchTerm(e.target.value);
  };

  const Title = (t) => {
    switch (t) {
      case "/":
        return "Product Inventory";
      break;

      case "/new":
        return "Add New Product";
      break;

      case `/${id}`:
        return "Product Details";
      break;

      case `/${id}/edit`:
        return "Edit Product";
      break;

    default:
        return "Error";
      break;

    
    }
  };

  exportToExcel(JsonData, 'file1')


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style = {{position : 'fixed', width : '100%', top: 0}}>
      <Container style={{ maxWidth: "100%" }}>
        <Navbar.Brand href="#home">{Title(route?.asPath)}</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ marginBottom: 10 }}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ justifyContent: "flex-end" }}
        >
          {route?.asPath === "/" ? (
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
          ) : null}

          <Nav>
            {route?.asPath === "/" ? (
              <Nav.Link href="/new">Add Product</Nav.Link>
            ) : null}

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
