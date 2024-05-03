import React from "react";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-con">
        <h1>TheScribe</h1>
        <ul>
          <li>Books</li>
          <li>Categories</li>
          <li>Authors</li>
        </ul>
        <ul>
          <li>About us</li>
          <li>Terms of service</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
