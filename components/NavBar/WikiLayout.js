import React from "react";
import Link from "next/link";
import { Container, Title } from "./style-content-navbar";

const Layout = ({ setTerm }) => {
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
            <form>
              <div className="ui transparent icon input">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => setTerm(e.target.value)}
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
};
export default Layout;
