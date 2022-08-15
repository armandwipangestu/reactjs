import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { createPortal } from "react-dom";

const CenteredModal = ({ children, activator }) => {
  const [show, setShow] = useState(false);

  const content = show && (
    <div>
      <div className="overlay">
        <div>
          <div className="modal-body">
            {children}
            <hr />
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={() => setShow(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {activator({ setShow })}
      {createPortal(
        <CSSTransition
          in={show}
          timeout={200}
          classNames="modal-transition"
          unmountOnExit
        >
          {() => <div>{content}</div>}
        </CSSTransition>,
        document.body
      )}
    </>
  );
};

export default CenteredModal;
