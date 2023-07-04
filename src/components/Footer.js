import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/Saria995" target="_blank" rel="noreferrer">
            Saria Elchaar
          </a>
          .
          <hr />
          <a
            href="linkdin.com/in/saria-elchaar-903483119"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
            Profile
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;