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
      <>
        <div className="ui pointing menu">
          <Link href="/">
            <a className="active item">SpaceX</a>
          </Link>
          <Link href="/videoBrowser">
            <a className="item">videoBrowser</a>
          </Link>
          <Link href="wikipedia">
            <a className="item">Wikipedia</a>
          </Link>
          <div className="right menu">
            <div className="item">
              <form onSubmit={this.onFormSubmit}>
                <div className="ui transparent icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    onChange={this.onInputChange}
                  />
                  <i className="search link icon"></i>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="ui segment">
          <p></p>
        </div>
      </>
    );
  }
}

export default SearchBar;
