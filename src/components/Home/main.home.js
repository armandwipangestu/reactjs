import React from "react";
import Me from "../../me.png";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { hover } from "@testing-library/user-event/dist/hover";

const Home = () => {
  return (
    <React.Fragment>
      <Container>
        <div
          className="bg-dark p-5 mt-5 text-white"
          style={{ borderRadius: "15px" }}
        >
          <Row>
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src={Me}
                className="img-fluid rounded-circle avatar"
                alt=""
                width={400}
              />
            </Col>
            <Col lg={6} className="mt-5">
              <h4 className="text-center">
                <FontAwesomeIcon icon={faCircleExclamation} className="me-2" />
                Information
                <hr />
              </h4>
              <p className="text-muted">
                Website ini dibuat menggunakan Library ReactJS pada saat
                mengikuti deacourse. Saat course selesai, seperti biasa bang dea
                memberikan beberapa tugas untuk melatih kemampuan setelah
                course, seperti:
                <br />
                <br />
                <span className="text-light">1</span> {">"} Routing url posts
                dengan isian component dari API Post (hanya menampilkan title
                saja)
                <FontAwesomeIcon icon={faCheck} className="ms-2 text-success" />
                <br />
                <span className="text-light">2</span> {">"} Membuat UI Homepage
                <FontAwesomeIcon icon={faCheck} className="ms-2 text-success" />
                <br />
                <span className="text-light">3</span> {">"} Active Navigation
                Bar
                <FontAwesomeIcon icon={faCheck} className="ms-2 text-success" />
                <br />
                <span className="text-light">4</span> {">"} Ketika post title
                diclick munculkan popup detail dari API (id, title, body)
                <FontAwesomeIcon icon={faCheck} className="ms-2 text-success" />
              </p>
              <div className="mt-5 text-end">
                <a
                  href="https://github.com/armandwipangestu/reactjs"
                  target="_blank"
                  rel="noreferrer"
                  className="icon"
                  style={{ fontSize: "18px" }}
                >
                  <FontAwesomeIcon icon={faGithub} className="me-2" />
                  GitHub
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Home;
