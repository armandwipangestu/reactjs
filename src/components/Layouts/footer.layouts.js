import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="page-footer font-small blue pt-4">
        <div className="footer-copyright text-center py-3">
          Made with <span className="text-danger">❤</span> by
          <a
            href="https://github.com/armandwipangestu"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
            className="ms-1"
          >
            Arman
          </a>
          .
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
