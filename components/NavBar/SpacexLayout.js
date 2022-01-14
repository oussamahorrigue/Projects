import React from "react";
import Link from "next/link";

const Layout = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link " aria-current="page">
                  SpaceX
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/videoBrowser">
                <a className="nav-link">videoBrowser</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="wikipedia">
                <a className="nav-link">Wikipedia</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Layout;
