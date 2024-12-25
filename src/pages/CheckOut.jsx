import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Nav, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';

const CheckOut = () => {
  const { carts } = useSelector((state) => state.allCart);
  const [quantities, setQuantities] = useState(carts.map(() => 1));
  const totalAmount = carts.reduce((sum, item, index) => sum + item.price * quantities[index], 0);





  return (
    <Container className='p-2 my-5'>
      <Row>
<Col md={8}>
<Card >
<Card.Header>
    <Nav variant="pills" defaultActiveKey="#first">
      <Nav.Item className='fs-1'>
      billing address
      </Nav.Item>
    </Nav>
  </Card.Header>
<br/>
<Form className='px-4'>
      <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Email </Form.Label>
        <Form.Control type="email" placeholder="you@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Address</Form.Label>
        <Form.Control type="text" placeholder="1234 main st" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Address 2  (Optional) </Form.Label>
        <Form.Control type="text" placeholder=" Apartment or suite" />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Country</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row><hr/>
      <h3> payment</h3>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label> name on card </Form.Label>
          <Form.Control type="text"  />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label> credit card number</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>

      </Row>
 <Row className="mb-3">
        <Form.Group as={Col}sm={2} controlId="formGridEmail">
          <Form.Label> expiration </Form.Label>
          <Form.Control type="text"  />
        </Form.Group>

        <Form.Group as={Col} sm={2} controlId="formGridPassword">
          <Form.Label> cvv</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>
        
      </Row><hr/>
      <Button variant="primary" size="lg" className='w-100 my-3'>
 Continue To Checkout
      </Button>
    </Form>
</Card>

</Col>
<Col sm={4}>
<Card>
                <Card.Header>
                  <Nav variant="pills">
                    <Nav.Item className="fs-1">Order Summary</Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col className="fs-5" sm={9}>Products ({quantities.reduce((sum, q) => sum + q, 0)})</Col>
                    <Col>${totalAmount.toFixed(2)}</Col>
                  </Row>
                  <Row>
                    <Col className="fs-5" sm={9}>Shipping</Col>
                    <Col>$25.00</Col>
                  </Row>
                  <br />
                  <Row>
                    <Col className="fs-3" sm={9}>Total Amount</Col>
                    <Col>${(totalAmount + 25).toFixed(2)}</Col>
                  </Row>
         
                </Card.Body>
              </Card>
            </Col>
      </Row>
    </Container>
  )
}

export default CheckOut
