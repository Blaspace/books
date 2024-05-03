import React from "react";
import { IoMdSearch } from "react-icons/io";

function Header() {
  return (
    <div className="header">
      <h1>
        Browse and download inspiring christian
        <br /> books of your favorite authors
      </h1>
      <br />
      <br />
      <div className="search">
        <input type="text" placeholder="Search For Books" />
        <span>
          <IoMdSearch />
        </span>
      </div>
    </div>
  );
}

export default Header;
