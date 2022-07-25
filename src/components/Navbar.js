import React, { useState } from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  const turnDarkModeOn = () => {
    if (btnStrong === "Enable Dark Mode") {
      setBtnStrong("Enable Light Mode");
    } else {
      setBtnStrong("Enable Dark Mode");
    }
  };
  const [btnStrong, setBtnStrong] = useState("Enable Dark Mode");
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                About
              </a>
            </li>
          </ul>

          <div className="form-check form-switch mx-3" onClick={turnDarkModeOn}>
            <input
              className={`form-check-input bg-${props.mode}`}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              aria-checked="true"
              onClick={props.toggleMode}
            />

            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              {btnStrong}
            </label>
          </div>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
Navbar.protoTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Set Name",
  aboutText: "About Name",
};
