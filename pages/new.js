import React from 'react';
import {Button, Form , Container, Row , Col} from 'react-bootstrap';



export default function AddProduct(){

    const handleSubmit = (e)=>{

e.preventDefault();
        console.log(e.target.value)
    }


    return(
        <Container style = {{padding: '10%'}}>


        <Form onSubmit = {handleSubmit}>
        <Form.Group className="mb-3">
            <Row>
                <Col>
                <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter product name" />
          <Form.Text className="text-muted">
           It is necesary to be unique
          </Form.Text>
                </Col>
            </Row>
      
        </Form.Group>
  
        <Form.Group className="mb-3"  >
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description"/>
        </Form.Group>

        <Form.Group className="mb-3">
        <Row>
            <Col> <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Price" />
            </Col>

            <Col> <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" placeholder="Quantity" />
            </Col>
            
            <Col> <Form.Label>Status</Form.Label>
          <Form.Control type="text" placeholder="Status" />
            </Col>
        </Row>
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
      </Container>


    )
}