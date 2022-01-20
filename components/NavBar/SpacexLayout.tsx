import React from "react";
import Link from "next/link";

const Layout: React.FC = () => {
  return (
    <div className="ui pointing menu">
      <Link href="/">
        <a className="item">SpaceX</a>
      </Link>
      <Link href="/videoBrowser">
        <a className="item">videoBrowser</a>
      </Link>
      <Link href="wikipedia">
        <a className="item">Wikipedia</a>
      </Link>
      <Link href="pokemon">
        <a className="item">Pokemon</a>
      </Link>
    </div>
  );
};
export default Layout;
