import Axios from "axios";
import React, { useEffect, useState } from "react";
import Loaders from "../Utilities/loaders";
import { Card, Alert } from "react-bootstrap";
import CenteredModal from "../Utilities/modals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const Articles = () => {
  const [getDatas, setDatas] = useState([]);
  const [getLimit, setLimit] = useState(3);
  const [getLoading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    if (isCancelled === false) {
      setLoading(true);
      Axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${getLimit}`,
      })
        .then((result) => setDatas(result.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }

    return () => {
      isCancelled = true;
    };
  }, [getLimit]);

  const handleLimit = (option) => {
    option === "+"
      ? setLimit((prev) => prev + 1)
      : setLimit((prev) => prev - 1);
  };

  if (getLoading) return <Loaders />;

  return (
    <React.Fragment>
      <Alert variant={"info"}>
        <FontAwesomeIcon icon={faCircleExclamation} className="me-2" />
        Currently showing "{getLimit}" {getLimit > 1 && "posts"}{" "}
        {getLimit === 1 && "post"}
      </Alert>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {getDatas.map((data, i) => {
          return (
            <React.Fragment key={i}>
              <Card style={{ width: "22rem", border: "none" }}>
                <Card.Body>
                  <CenteredModal
                    activator={({ setShow }) => (
                      <button
                        className="btn btn-outline-dark text-truncate w-100"
                        type="button"
                        onClick={() => setShow(true)}
                      >
                        {data.title}
                      </button>
                    )}
                  >
                    <h3>Post ID: {data.id}</h3>
                    <strong>User ID</strong>: {data.userId}
                    <hr />
                    <p>
                      <strong>Title</strong>: {data.title}
                      <br />
                      <br />
                      <strong>Description</strong>: {data.body}
                    </p>
                  </CenteredModal>
                </Card.Body>
              </Card>
            </React.Fragment>
          );
        })}
        <div className="mt-2 mx-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => handleLimit("+")}
          >
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            Tambah Post
          </button>
          {getLimit > 1 && (
            <button className="btn btn-danger" onClick={() => handleLimit("-")}>
              <FontAwesomeIcon icon={faTrashCan} className="me-2" />
              Hapus Post
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Articles;
