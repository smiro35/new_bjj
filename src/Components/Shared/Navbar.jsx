import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.scss";
import { Link } from "@reach/router";
const TopNavbar = () => {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      
          <Navbar.Brand href="#home" className="Toplogo">
            <img src="https://images.squarespace-cdn.com/content/v1/5a830ab780bd5eb3f9c85177/1626701639286-LPHEOFU5VJBWWXYW0S3B/NE+BJJ+CONCEPT+FILE6+-+Edited+%281%29.png"
            width="120"
            height="120"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="" id="Right-navbar">
            {/* <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/contact">Class Schedule</Link>
            </Nav.Link>

            <NavDropdown title="Programs" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Bjj</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Muay Thai</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link to="/contact">Memberships</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Team</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Waiver</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavbar;

