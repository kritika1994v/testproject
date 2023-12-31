import React from "react";
import {Link} from "react-router-dom";
function NavbaarElements() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
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
              <Link to="/">
                <li className="nav-item">Home</li>
              </Link>
            

              <Link to="/About">
                <li className="nav-item">About</li>
              </Link>
              <Link to="/Contact">
                <li className="nav-item">Contact</li>
              </Link>
              
            </ul>
            <form className="d-flex">
           
              <button className="btn btn-outline-success" type="submit">
          Sign Up
              </button>
          
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbaarElements;
