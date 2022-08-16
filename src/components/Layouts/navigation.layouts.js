import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faImage,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../logo.svg";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
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
                color: isActive ? "#FFF" : "#6c757d",
                textDecoration: isActive ? "none" : "none",
                padding: "3px",
              })}
              className="me-5 nav-item"
            >
              <FontAwesomeIcon icon={faHouseUser} className="me-2" />
              Home
            </NavLink>
            <NavLink
              to="albums"
              style={({ isActive }) => ({
                color: isActive ? "#FFF" : "#6c757d",
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
                color: isActive ? "#FFF" : "#6c757d",
                textDecoration: isActive ? "none" : "none",
                padding: "3px",
              })}
              className="me-5 nav-item"
            >
              <FontAwesomeIcon icon={faBook} className="me-2" />
              Posts
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
