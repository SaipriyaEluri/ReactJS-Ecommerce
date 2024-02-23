import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="main_navbar">
        <header>
          <nav className="first_navbar">
            <div>
              <p>E Commerce</p>
            </div>
            <div className="input-container">
              <input type="text" className="form-control" />
              <span className="search_icon">
                <i class="bi bi-search"></i>
              </span>
            </div>
            <div>
              <button className="btn btn-outline-secondary me-2">
                SignOut
              </button>
              <button className="btn btn-outline-secondary">
                <i class="bi bi-cart"></i>
              </button>
            </div>
          </nav>
        </header>
      </div>
      <div className="second_navbar">
        <header>
          <div className="second_nav">
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item me-4">
                      <Link to="/" class="nav-link">
                        <a>Menu</a>{" "}
                      </Link>
                    </li>

                    <li class="nav-item  me-4">
                      <Link to="/electronics" class="nav-link">
                        <a>Electronics</a>
                      </Link>
                    </li>
                    <li class="nav-item  me-4">
                      <Link to="/kitchen" className="nav-link">
                        <a>Kitchen</a>
                      </Link>
                    </li>
                    <li class="nav-item  me-4">
                      <Link to="/kidsWear" class="nav-link">
                        <a>Kids Wear</a>
                      </Link>
                    </li>
                    <li class="nav-item  me-4">
                      <Link to="/MensWear" class="nav-link">
                        <a>Mens Wear</a>
                      </Link>
                    </li>
                    <li class="nav-item  me-4">
                      <Link to="/WomensWear" class="nav-link">
                        <a>Womens Wear</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};
export default Navbar;
