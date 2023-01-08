import React, { useState, useEffect} from "react";

import { Button, Form, Container, Row, Col } from "react-bootstrap";
import AlertMessage from "../components/alert";
import Spinner from "react-bootstrap/Spinner";



function MyFallbackComponent({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export default function AddProduct() {
  const [data, setData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});


  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        addNew();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const addNew = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/items", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: data?.status
          ? JSON.stringify(data)
          : JSON.stringify({ ...data, status: "In-Stock" }),
      });
    } catch (error) {
    console.log(error)
    }
  };

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  const validate = () => {
    let err = {};

    if (!data.name) {
      err.name = "Name is required";
    }
    if (!data.description) {
      err.description = "Description is required";
    }
    if (!data.price) {
      err.price = "Price is required";
    }
    if (!data.quantity) {
      err.quantity = "Quantity is required";
    }

    return err;
  };

  setTimeout(() => {
    if (isSubmitting) {
      setIsSubmitting(false);
    }
  }, 2000);

  return (
    
    <Container style={{ padding: "10%" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            onChange={updateData}
            name="name"
          />
          <Form.Text className="text-muted">
            It is necesary to be unique
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            placeholder="Description"
            onChange={updateData}
            name="description"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Row>
            <Col className="col-sm-4 col-12">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                onChange={updateData}
                name="price"
              />
            </Col>

            <Col className="col-sm-4 col-12">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Quantity"
                onChange={updateData}
                name="quantity"
              />
            </Col>

            <Col className="col-sm-4 col-12">
              <Form.Label>Status</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={updateData}
                name="status"
              >
                <option value="In-Stock">In-Stock</option>
                <option value="Out-Stock">Out-Stock</option>
                <option value="On order">On Order</option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>

        <Button variant="dark" type="submit">
          {isSubmitting ? (
            <Spinner
              style={{ marginRight: 10 }}
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : null}
          {isSubmitting ? "submitting" : "submit"}
        </Button>
      </Form>
    </Container>


  );
}
