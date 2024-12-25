import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { RiUserAddFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const logged = JSON.parse(localStorage.getItem("logged"));
  const { carts } = useSelector((state) => state.allCart);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("logged");
    navigate("/login");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary sticky-top shadow-lg"
    >
      <Container>
        <NavLink to="/home" className="navbar-brand fw-bolder flex-grow-1">
          E-COMMERCE
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto gap-2">
            <NavLink
              className="text-dark fs-4 text-decoration-none nav px-1"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className="text-dark fs-4 text-decoration-none nav px-1"
              to="/products"
            >
              Products
            </NavLink>
            <NavLink
              className="text-dark fs-4 text-decoration-none nav px-1"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className="text-dark fs-4 text-decoration-none nav px-1"
              to="/contact"
            >
              Contact
            </NavLink>
          </Nav>
          <Nav className="gap-2">
            {logged ? (
              <Button variant="outline-dark" onClick={handleLogout}>
                <MdLogout /> Logout
              </Button>
            ) : (
              <Button
                variant="outline-dark"
                onClick={() => navigate("/login")}
                aria-label="Login"
              >
                <CgLogIn /> Login
              </Button>
            )}
            <Button
              variant="outline-dark"
              onClick={() => navigate("/register")}
              aria-label="Register"
            >
              <RiUserAddFill /> Register
            </Button>
            <Button
              variant="outline-dark"
              onClick={() => navigate("/cart")}
              aria-label="Cart"
            >
              <FaShoppingCart /> Cart ({carts.length})
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
