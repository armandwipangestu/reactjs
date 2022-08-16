import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faImage, faBook } from "@fortawesome/free-solid-svg-icons";
import logo from "../../logo.svg";
import ReactSwitch from "react-switch";

const Navigation = ({ button }) => {
  console.log(button);
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="me-5">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline block align-top"
          />{" "}
          Image App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto justify-content-end"
            style={{ width: "100%" }}
          >
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#6c757d" : "#6c757d",
                textDecoration: isActive ? "none" : "none",
                padding: "3px",
              })}
              className="me-5 nav-item"
            >
              <FontAwesomeIcon icon={faHouse} className="me-2" />
              Home
            </NavLink>
            <NavLink
              to="albums"
              style={({ isActive }) => ({
                color: isActive ? "#6c757d" : "#6c757d",
                textDecoration: isActive ? "none" : "none",
                padding: "3px",
              })}
              className="me-5 nav-item"
            >
              <FontAwesomeIcon icon={faImage} className="me-2" />
              Albums
            </NavLink>
            <NavLink
              to="posts"
              style={({ isActive }) => ({
                color: isActive ? "#6c757d" : "#6c757d",
                textDecoration: isActive ? "none" : "none",
                padding: "3px",
              })}
              className="me-5 nav-item"
            >
              <FontAwesomeIcon icon={faBook} className="me-2" />
              Posts
            </NavLink>
            {button}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
