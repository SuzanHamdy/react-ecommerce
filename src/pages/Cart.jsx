import React, { useState } from "react";
import { Button, ButtonGroup, Card, Col, Container, Nav, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { removeFromCart } from "../redux/CartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const { carts } = useSelector((state) => state.allCart);
  const [quantities, setQuantities] = useState(carts.map(() => 1));
  const dispatch = useDispatch();

  const handleQuantityChange = (index, value) => {
    setQuantities((prev) => {
      const updated = [...prev];
      updated[index] = Math.max(1, updated[index] + value);
      return updated;
    });
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const totalAmount = carts.reduce(
    (sum, item, index) => sum + item.price * quantities[index],
    0
  );

  if (carts.length === 0) {
    return (
      <div className="text-center px-sm-5 mx-sm-5">
        <img src="./assets/9038.jpg" alt="empty" className="m-auto" width={360} />
        <br />
        <Button
          className="w-50 text-center mx-5"
          variant="dark"
          onClick={() => navigate("/")}
        >
          Go To Home
        </Button>
      </div>
    );
  }

  return (
    <Container className="m-md-5 p-md-5">
      <Row>
        {/* Cart Items */}
        <Col sm={8}>
          <Card className="mb-3">
            <Card.Header>
              <Nav variant="pills">
                <Nav.Item className="fs-1">Item List</Nav.Item>
              </Nav>
            </Card.Header>
            {carts.map((item, index) => (
              <Card.Body key={item.id}>
                <Row>
                  <Col>
                    <img src={item.image} alt={item.title} width={75} />
                  </Col>
                  <Col>{item.title.substring(0, 10)}...</Col>
                  <Col>
                    <ButtonGroup size="sm">
                      <Button onClick={() => handleQuantityChange(index, -1)} aria-label="Decrease Quantity">
                        -
                      </Button>
                      <Button>{quantities[index]}</Button>
                      <Button onClick={() => handleQuantityChange(index, 1)} aria-label="Increase Quantity">
                        +
                      </Button>
                    </ButtonGroup>
                  </Col>
                  <Col>${(item.price * quantities[index]).toFixed(2)}</Col>
                  <Col className="fs-3 text-danger">
                    <MdDelete onClick={() => handleRemove(item)} aria-label="Remove Item" />
                  </Col>
                </Row>
              </Card.Body>
            ))}
          </Card>
        </Col>
        {/* Order Summary */}
        <Col sm={4}>
          <Card>
            <Card.Header>
              <Nav variant="pills">
                <Nav.Item className="fs-1">Order Summary</Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col className="fs-5" sm={9}>
                  Products ({quantities.reduce((sum, q) => sum + q, 0)})
                </Col>
                <Col>${totalAmount.toFixed(2)}</Col>
              </Row>
              <Row>
                <Col className="fs-5" sm={9}>
                  Shipping
                </Col>
                <Col>$25.00</Col>
              </Row>
              <br />
              <Row>
                <Col className="fs-3" sm={9}>
                  Total Amount
                </Col>
                <Col>${(totalAmount + 25).toFixed(2)}</Col>
              </Row>
              <Button
                className="m-2 px-5 w-100"
                size="lg"
                variant="dark"
                onClick={() => navigate("/CheckOut")}
              >
                Go to Checkout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
