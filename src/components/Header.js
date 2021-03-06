import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ButtonGCAA from "./ButtonGCAA";

export default function Header(props) {
  return (
    <Navbar expand="lg" sticky="top">
      <Container fluid>
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
          <div className="d-block d-sm-none">
            <ButtonGCAA WithLove />
          </div>
        </Navbar.Collapse>
        <div className="d-none d-sm-block">
          <ButtonGCAA WithLove />
        </div>
      </Container>
    </Navbar>
  )
}
