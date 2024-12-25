import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const log = JSON.parse(localStorage.getItem("user"));
    if (log && input.email === log.email && input.password === log.password) {
      localStorage.setItem("logged", true);
      navigate("/");
    } else {
      setError("Email or password is incorrect");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container>
      <h2 className="p-3 m-3 text-center fs-1">Login</h2>
      <hr />
      <Container>
        <Form className="w-75 m-auto" onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              required
              name="email"
              value={input.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              required
              name="password"
              value={input.password}
              onChange={handleChange}
            />
          </Form.Group>
          {error && <p className="text-danger">{error}</p>}
          <p>
            Already have an account? <Link to="/register">Register</Link>
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <Button className="px-3 fs-4 m-5 w-50" type="submit" variant="dark">
              Login
            </Button>
          </div>
        </Form>
      </Container>
    </Container>
  );
};

export default Login;
