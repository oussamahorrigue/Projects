import React from "react";
import Link from "next/link";

const Layout = () => {
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
      </div>
      <div className="ui segment">
        <p></p>
      </div>
    </>
  );
};
export default Layout;
