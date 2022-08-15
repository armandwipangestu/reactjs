import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faImage,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="me-5">
          IMAGE APP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#FFF" : "#6c757d",
                textDecoration: isActive ? "none" : "none",
                borderBottom: isActive ? "thin solid #6c757d" : "none",
                padding: "3px",
              })}
              className="me-5"
            >
              <FontAwesomeIcon icon={faHouseUser} className="me-2" />
              Home
            </NavLink>
            <NavLink
              to="albums"
              style={({ isActive }) => ({
                color: isActive ? "#FFF" : "#6c757d",
                textDecoration: isActive ? "none" : "none",
                borderBottom: isActive ? "thin solid #6c757d" : "none",
                padding: "3px",
              })}
              className="me-5"
            >
              <FontAwesomeIcon icon={faImage} className="me-2" />
              Albums
            </NavLink>
            <NavLink
              to="posts"
              style={({ isActive }) => ({
                color: isActive ? "#FFF" : "#6c757d",
                textDecoration: isActive ? "none" : "none",
                borderBottom: isActive ? "thin solid #6c757d" : "none",
                padding: "3px",
              })}
              className="me-5"
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
