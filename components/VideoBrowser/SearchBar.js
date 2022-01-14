import React from "react";
import { Search, Inputstyle, SerachImage } from "./style-video-content";

import Link from "next/link";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.TryApi(this.state.term);
  };

  render() {
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
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.onInputChange}
              />
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default SearchBar;
