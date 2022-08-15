import React from "react";
import { Alert } from "react-bootstrap";

const NotFound = () => {
  return (
    <React.Fragment>
      <div className="mt-5 d-flex justify-content-center align-item-center">
        <Alert variant="danger">
          <Alert.Heading>Oops! 404 Page not found. </Alert.Heading>
          <p>The page you're looking for doesn't exist.</p>
          <hr />
          <a href="/" className="mb-0" style={{ textDecoration: "none" }}>
            <p>Go Home</p>
          </a>
        </Alert>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
