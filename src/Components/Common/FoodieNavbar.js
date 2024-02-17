import React from "react";
import "../Styles/Home.css";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const FoodieNavbar = () => {
  return (
    <div className="navBar_foodie">
      <Navbar collapseOnSelect expand="lg" className="bg-transparent">
        <Container>
          <Navbar.Brand href="#home" className="me-auto">
            <img src="/assets/navLogo.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto d-flex gap-3">
              <Nav.Link href="/" className="navBar_links fw-bolder">
                Home
              </Nav.Link>
              <Nav.Link href="/" className="navBar_links fw-bolder">
                Packages
              </Nav.Link>
              <Nav.Link href="/" className="navBar_links fw-bolder">
                About us
              </Nav.Link>
              <Nav.Link href="/" className="navBar_links fw-bolder">
                Contact us
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/">
                <FaShoppingCart className="icons_nav mt-2 fw-bolder" />
              </Nav.Link>
              <Nav.Link eventKey={2} href="/">
                <Button className="nav_btn rounded-5 fw-bolder border-0 py-2 px-3">
                  Order Now
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default FoodieNavbar;
