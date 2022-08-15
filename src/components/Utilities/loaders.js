import { Spinner } from "react-bootstrap";

const Loaders = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "70vh" }}
    >
      <div className="d-flex">
        <Spinner animation="border" variant="primary" className="me-3" />
        <Spinner animation="border" variant="warning" className="me-3" />
        <Spinner animation="border" variant="danger" />
      </div>
    </div>
  );
};

export default Loaders;
