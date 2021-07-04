import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>綠盟二十週年特刊</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {props.routes.map((route, i) => (
          <LinkContainer key={i} to={route.path}>
            <Nav.Link>{route.title}</Nav.Link>
          </LinkContainer>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
