import React from "react";
import { Container } from "react-bootstrap";
import Articles from "./article.posts";

const Posts = (props) => {
  return (
    <React.Fragment>
      <Container className="mt-4">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <Articles />
      </Container>
    </React.Fragment>
  );
};

export default Posts;
