import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="page-footer font-small blue pt-3">
        <div className="footer-copyright text-center py-3">
          Made with <span className="text-danger">❤</span> by
          <a
            href="https://github.com/armandwipangestu"
            target="_blank"
            rel="noreferrer"
            className="ms-1 text-primary"
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
