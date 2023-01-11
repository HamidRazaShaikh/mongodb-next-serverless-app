import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Modal,
  Spinner,
} from "react-bootstrap";

function Dialogue(props) {
  let {
    onHide,
    action: { Edit, confirmDelete, data},
  } = props;

  const [form, setForm] = useState(data);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [errorRes, setErrorRes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        upDateItem();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const upDateItem = async () => {
    try {
      const res = await fetch(
        `${process.env.BASE_URL}/api/items/${form?._id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      Edit(form);
      setIsSubmitting(false);      
      onHide()
      // router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const confirmed = () => {
    confirmDelete();
    onHide();
  };

  const updateData = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errs = validate();
    setErrors(errs);
    setSubmitted(false);
    setIsSubmitting(true);
  };

  const validate = () => {
    let err = {};

    if (!form.name) {
      err.name = "Name is required";
    }
    if (!form.description) {
      err.description = "Description is required";
    }
    if (!form.price) {
      err.price = "Price is required";
    }
    if (!form.quantity) {
      err.quantity = "Quantity is required";
    }

    return err;
  };



  if (Edit) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Item
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                onChange={updateData}
                name="name"
                value={form?.name}
              />

              {errors?.name ? (
                <Form.Text style={{ color: "red" }}>{errors?.name}</Form.Text>
              ) : (
                <Form.Text className="text-muted">
                  It is necesary to be unique
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                placeholder="Description"
                onChange={updateData}
                name="description"
                value={form?.description}
              />
              {errors?.description ? (
                <Form.Text style={{ color: "red" }}>
                  {errors?.description}
                </Form.Text>
              ) : null}
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
                    value={form?.price}
                  />
                  {errors?.price ? (
                    <Form.Text style={{ color: "red" }}>
                      {errors?.price}
                    </Form.Text>
                  ) : null}
                </Col>

                <Col className="col-sm-4 col-12">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Quantity"
                    onChange={updateData}
                    name="quantity"
                    value={form?.quantity}
                  />
                  {errors?.quantity ? (
                    <Form.Text style={{ color: "red" }}>
                      {errors?.quantity}
                    </Form.Text>
                  ) : null}
                </Col>

                <Col className="col-sm-4 col-12">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={updateData}
                    name="status"
                    value={form?.status}
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
        </Modal.Body>

        {/* <Modal.Footer>
        <Button onClick={confirmed}>Yes</Button>
        <Button onClick={props.onHide}>No</Button>
      </Modal.Footer> */}
      </Modal>
    );
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Warning!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you want to Delete this item?</Modal.Body>

      <Modal.Footer>
        <Button onClick={confirmed}>Yes</Button>
        <Button onClick={props.onHide}>No</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Dialogue;
